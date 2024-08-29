import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.scss']
})
export class Activity3Component {
  constructor(private router:Router) { }
  path:string[] = this.router.url.split('/');
}
