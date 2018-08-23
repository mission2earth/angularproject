import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  categories : Category[] = [];
  frmCategory:Category = new Category(null, null);
  constructor(private ctgSvc : CategoryService) 
  {

  }

  ngOnInit() {
    this.ctgSvc.getCategories().subscribe(
      (data)=> {
        console.log("success with GET", data);
        this.categories = data;
      }, (err)=> {
        console.log("Error with GET", err);
      }
    );
  }

  add()
  {
    this.ctgSvc.addCategory(this.frmCategory).subscribe(
      (data)=> {
        console.log("ADD Success ")
        this.categories.push(data);
      },
      (err)=> {
        console.log("ADD Error", err)
      }
    );
    this.frmCategory = new Category(null, null)
  }
  delete(id:number)
  {
    this.ctgSvc.deleteCategory(id).subscribe(
      (data)=> {
        console.log("Delete success")
        let idx = this.categories.findIndex((i)=> i.id== id)
        this.categories.splice(idx,1);
      }, (err)=> {
        console.log("Delete Error", err)
      }
    )
  }

  edit(category: Category){
  //this.frmCategory=category; -- Should not be used as it is overwriting current object
  Object.assign(this.frmCategory, category);
  }

  update()
  {
   this.ctgSvc.updateCategory(this.frmCategory).subscribe(
     (data)=> {
       console.log("Uddate success")
       let idx = this.categories.findIndex((i)=> i.id== data.id)
       this.categories[idx] = data;
     },(err)=> {
        console.log("Update error", err)
     }
   )
   this.frmCategory = new Category(null, null)
  }

}
