import { Injectable } from "@angular/core";
import { Category } from "../../models/category.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService{
    private categoryData:Category[]=[];
    restUrl = "http://localhost:3000/wscategories"
        constructor(private httpClient:HttpClient){

    }

    getCategories()
    {
        return this.httpClient.get<Category[]>(this.restUrl);
    }
    addCategory (newCategory : Category)
    {
        return this.httpClient.post<Category>(this.restUrl, newCategory);
    }
    deleteCategory(categoryId : number)
    {
        return this.httpClient.delete<Category>(this.restUrl+"/"+ categoryId);
    }
    updateCategory(modifiedCategory : Category)
    {
        return this.httpClient.put<Category>(this.restUrl+"/"+ modifiedCategory.id, modifiedCategory);
    }
}