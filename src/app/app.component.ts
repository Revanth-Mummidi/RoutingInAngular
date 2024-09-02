import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { permissionGuardGuard } from './guards/permission-guard.guard';
import { StatesService } from './services/states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private route:Router,private state:StatesService){}
  title = 'task4';
  isUser:boolean=false;
  value:number=0;  
  value1:number=this.state.behaviorSubject.value;
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
    this.state.subject.subscribe(newValue => {
        this.value = newValue;
        // console.log('State value changed:', newValue);
    });
    this.state.behaviorSubject.subscribe(newValue => {
      this.value1 = newValue;
      // console.log('State value changed:', newValue);
    });
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
