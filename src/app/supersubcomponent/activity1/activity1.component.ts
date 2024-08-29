import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.scss']
})
export class Activity1Component  {
  constructor(private router:Router) { }
  path:string[] = this.router.url.split('/');
  name:string = '';
  email:string = '';
  onSubmit(){
    console.log(this.name);
    console.log(this.email);
    this.name = '';
    this.email = '';
  }
}
