import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component {
  constructor(private router:Router) { }
  path:string[] = this.router.url.split('/');
}
