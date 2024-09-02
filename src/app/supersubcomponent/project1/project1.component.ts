import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component {
  constructor(private router:Router , private state:StatesService ) { }
  path:string[] = this.router.url.split('/');
  value:number=0; 
  value1:number=this.state.behaviorSubject.value;
  handleIncrement(){
    this.state.behaviorSubject.next(this.value1+1);
    // this.state.handleIncrement();
    this.state.subject.next(this.value+1);
  }
  handleDecrement(){
    this.state.behaviorSubject.next(this.value1-1);
    // this.state.handleDecrement();
    this.state.subject.next(this.value-1);
  }
  ngOnInit(): void {
    this.state.behaviorSubject.subscribe(newValue => {
      this.value1 = newValue;
      console.log('State value changed:', newValue);
    });

    this.state.subject.subscribe(newValue => {
      this.value = newValue;
      console.log('State value changed:', newValue);
    });
  }
}
