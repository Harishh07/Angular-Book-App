import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) { }


  deleteusingid(id:number)
  {
    return this.http.delete("http://localhost:3000/delete/"+id);
     
  }

  deleteallprod()
  {
    return this.http.delete("http://localhost:3000/del");
  }

  getallprod()
  {
    return this.http.get("http://localhost:3000/");
  }

  getbookbyid(id:any)
  {
    return this.http.get("http://localhost:3000/"+id.id);
  }

  produpdate(products: {id:number,name:string,author:string,price:number})
  {
    return this.http.put<{name:string}>("http://localhost:3000/update/"+products.id,products);

  }

  createprod(products: {id:number,name:string,author:string,price:number})
  {
    return this.http.post<{name:string}>("http://localhost:3000/",products);
  }

}
