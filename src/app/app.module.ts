import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { Homefeature1Component } from './subcomponent/homefeature1/homefeature1.component';
import { Homefeature2Component } from './subcomponent/homefeature2/homefeature2.component';
import { Productfeature1Component } from './subcomponent/productfeature1/productfeature1.component';
import { Productfeature2Component } from './subcomponent/productfeature2/productfeature2.component';
import { Activity1Component } from './supersubcomponent/activity1/activity1.component';
import { Activity2Component } from './supersubcomponent/activity2/activity2.component';
import { Activity3Component } from './supersubcomponent/activity3/activity3.component';
import { Project3Component } from './supersubcomponent/project3/project3.component';
import { Project2Component } from './supersubcomponent/project2/project2.component';
import { Project1Component } from './supersubcomponent/project1/project1.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SettingsComponent,
    Homefeature1Component,
    Homefeature2Component,
    Productfeature1Component,
    Productfeature2Component,
    Activity1Component,
    Activity2Component,
    Activity3Component,
    Project3Component,
    Project2Component,
    Project1Component,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
