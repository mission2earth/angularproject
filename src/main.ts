import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
console.log("Main.ts file is called")

/*
//Type annotation - Explicit
let n:number
//n=true
n=50;

//Type inference - Implicit
let x = 10;
*/


