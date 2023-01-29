import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {map} from 'rxjs/operators';
import { Product } from '../model/products';
import {
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `
    <form #productsform="ngForm" (ngSubmit)="onproductcreate(productsform.value)" class="text-left lgn">
      <div id="name">Enter the Name</div><br>
      <input name="name" id="text" required #name="ngModel" placeholder="Enter the Name" ngModel><br>
      <br>
      <div id="author">Enter Author's name</div><br>
      <input name="author" id="text" required #author="ngModel" placeholder="Enter Author name" ngModel><br>
      <br>
      <div id="price">Enter price</div><br>
      <input name="price" id="text" required type="number" #price="ngModel" placeholder="Enter the price" ngModel><br>
      <br>
      <button [disabled]="productsform.invalid" id="submit" (click)="alertt()">INSERT BOOK</button>&nbsp;&nbsp;&nbsp;
    </form>
  `
})
export class LoginComponent implements OnInit{
  title = 'Home Screen';
  allproducts:any=[];
  isfetching:boolean=false;
  dispbook:any={};
  public message = "Book Updated Successfully";
  public mess = "Book Inserted Successfully";

  filmIcon = faArrowDown;
 

  constructor(private http:HttpClient, private utilityservice:UtilityService)
  {


  }

  ngOnInit(){
    this.fetchproducts();
  }

  onproductfetch()
  {
    this.fetchproducts();
  }

  onproductcreate(products: {id:number,name:string,author:string,price:number})
  { 
    console.log(products);
    this.utilityservice.createprod(products)
    .subscribe((res)=>{

      console.log(res);
    });

  }

  
  onproductupdate(products: {id:number,name:string,author:string,price:number})
  { 
    console.log(products);
    this.utilityservice.produpdate(products)
    .subscribe((res:any)=>{

      console.log(res);
      alert(res.msg);
      
    },err => alert(err.error.msg));

  }

  displaybook(id:any){

    console.log(id);

    this.utilityservice.getbookbyid(id)
    .subscribe( book=>{

      this.dispbook=book[0];
      

    },err => alert(err.error.msg))
      
    
  }  



  private fetchproducts()
  {
    this.isfetching=true;
    this.utilityservice.getallprod()
    .subscribe((products)=>{

      console.log(products);
      this.allproducts =products;
      this.isfetching=false;

    });
  }

  ondeleteproduct(id:number)
  {
    
    this.utilityservice.deleteusingid(id)
    .subscribe();
  }


  ondeleteallproduct()
  {
    this.utilityservice.deleteallprod()
    .subscribe();
  }


  alert()
  {
    
    alert(this.message);

  }
  alertt()
  {
    
    alert(this.mess);

  }

  clear()
  {
    alert("All Books Removed Successfully!")
  }
}

