import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AppComponent} from './app.component';
import { ServicesComponent } from './Services/services.component';
import { ContactComponent } from './Contact/contact.component';
import { ProjectsComponent } from './Projects/projects.component';
import { ContactService } from './Contact/contact.service';
import { AgmCoreModule } from '@agm/core';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'services',
    component : ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
  ,
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes), AgmCoreModule.forRoot({apiKey: 'AIzaSyDL4Uk8kjI-eVIn9cE2BAau8op6bty2yIk'})
  ],
  declarations : [AppComponent, HomeComponent, ServicesComponent, ContactComponent, ProjectsComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})

export class AppModule { }
