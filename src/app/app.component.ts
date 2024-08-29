import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { permissionGuardGuard } from './guards/permission-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private route:Router){}
  title = 'task4';
  isUser:boolean=false;
  ngOnInit(): void {
    
    if(!sessionStorage.getItem('user')){
      sessionStorage.setItem('user','user');
    }
    this.isUser=(sessionStorage.getItem('user')=='user' || !sessionStorage.getItem('user'))?true:false;
    if(this.isUser)
    {
      this.route.navigate(['/projects']);
    }
    console.log(this.isUser);
  }
  changeUser(){
    if(this.isUser){
      sessionStorage.setItem('user','admin');
    }
    else{
      if(this.route.url=='/settings' || this.route.url.includes('/home')){
        this.route.navigate(['/projects']);
      }
      sessionStorage.setItem('user','user');
    }
    this.isUser=!this.isUser;
  }
  handleUnauthorizedLinks(){
    if(this.isUser){
      alert('You are not authorized to access this page');
    }
  }
}
