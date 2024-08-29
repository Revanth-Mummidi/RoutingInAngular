import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.scss']
})
export class Activity2Component {
  constructor(private router:Router) { }
  path:string[] = this.router.url.split('/');
}
