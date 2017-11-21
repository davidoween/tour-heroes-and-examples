import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroService } from './hero.service';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';
import { FormularioComponent } from './components/formularioReactivo/formulario.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { ForbiddenValidatorDirective } from "./shared/forbidden-name.directive";
import { EqualValidator } from './shared/equal-validate.directive';  // import validator
import { JuriNameValidator } from './shared/juriName.directive';
import { AsyncValidator } from "./shared/emailUniq.directive";
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FormularioComponent,
    FormularioTemplateComponent,
    ForbiddenValidatorDirective,
    EqualValidator,
    JuriNameValidator,
    AsyncValidator
  ],
  imports: [
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
