import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.scss']
})
export class Project3Component {
  constructor(private router:Router) { }
  path:string[] = this.router.url.split('/');
}
