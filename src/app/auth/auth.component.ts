import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{
  title = 'Authentication Screen';
  edited: any; 
  filmIcon = faHeart;
  box:any;
  ison:boolean=false;

  

  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  nav(){

    this.router.navigateByUrl('/home')
    
  }

  loginUser(item:any){
    
    console.warn(item);
  }

}
