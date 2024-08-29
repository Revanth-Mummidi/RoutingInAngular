import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';
import { Homefeature1Component } from './subcomponent/homefeature1/homefeature1.component';
import { Homefeature2Component } from './subcomponent/homefeature2/homefeature2.component';
import { Productfeature1Component } from './subcomponent/productfeature1/productfeature1.component';
import { Productfeature2Component } from './subcomponent/productfeature2/productfeature2.component';
import { Activity1Component } from './supersubcomponent/activity1/activity1.component';
import { Activity2Component } from './supersubcomponent/activity2/activity2.component';
import { Activity3Component } from './supersubcomponent/activity3/activity3.component';
import { Project1Component } from './supersubcomponent/project1/project1.component';
import { Project2Component } from './supersubcomponent/project2/project2.component';
import { Project3Component } from './supersubcomponent/project3/project3.component';
import { permissionGuardGuard } from './guards/permission-guard.guard';
import { formpermissionGuard } from './guards/formpermission.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[permissionGuardGuard],
    children:[
      {
        path:'',
        redirectTo:'homefeature1',
        pathMatch:'full'
      },
      {
        path:'homefeature1',
        component:Homefeature1Component,
        children:[
          {
            path:'activity1',
            component:Activity1Component,
            canDeactivate:[formpermissionGuard]
          },
          {
            path:"",
            redirectTo:'activity1',
            pathMatch:'full'
          },
          {
            path:'activity2',
            component:Activity2Component
          },
          {
            path:'activity3',
            component:Activity3Component
          }
        ]
      },
      {
        path:'homefeature2',
        component:Homefeature2Component
      }
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'projects',
    component:ProjectsComponent,
    children:[
      {
        path:'',
        redirectTo:'projectfeature1',
        pathMatch:'full'
      },
      {
        path:'projectfeature1',
        component:Productfeature1Component,
        children:[
          {
            path:'project1',
            component:Project1Component
          },
          {
            path:"",
            redirectTo:'project1',
            pathMatch:'full'
          },
          {
            path:'project2',
            component:Project2Component
          },
          {
            path:'project3',
            component:Project3Component
          }
        ]
      },
      {
        path:'projectfeature2',
        component:Productfeature2Component
      }
    ]
  },
  {
    path:'settings',
    canActivate:[permissionGuardGuard],
    component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
