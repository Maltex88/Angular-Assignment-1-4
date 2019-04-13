import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrafikLjusComponent } from './trafik-ljus/trafik-ljus.component';
import { BokaResaComponent } from './boka-resa/boka-resa.component';
import { DestinationButtonComponent } from './boka-resa/destination-button/destination-button.component';
import { DestinationInfoComponent } from './boka-resa/destination-button/destination-info/destination-info.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDataService } from './animal-list/animal-data.service';
import { LinkedInKillerComponent } from './linked-in-killer/linked-in-killer.component';
import { EmployerFormComponent } from './linked-in-killer/employer-form/employer-form.component';
import { SkillListComponent } from './linked-in-killer/skill-list/skill-list.component';
import { AnimalComponent } from './animal-list/animal/animal.component';


@NgModule({
  declarations: [
    AppComponent,
    TrafikLjusComponent,
    BokaResaComponent,
    DestinationButtonComponent,
    DestinationInfoComponent,
    AnimalListComponent,
    LinkedInKillerComponent,
    EmployerFormComponent,
    SkillListComponent,
    AnimalComponent,



  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ AnimalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
