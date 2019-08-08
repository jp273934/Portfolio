import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AppComponent} from './app.component';
import { ServicesComponent } from './Services/services.component';
import { ContactComponent } from './Contact/contact.component';
import { ProjectsComponent } from './Projects/projects.component';

const routes : Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  declarations : [AppComponent, HomeComponent, ServicesComponent, ContactComponent, ProjectsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
