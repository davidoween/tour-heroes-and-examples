import { MessageService } from './message.service';
import { MessagesComponent } from './components/messages/messages.component';
import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let MessageServiceStub;
var messageService;

describe('AppComponent & TestModule', () => {
  beforeEach(async(() => {

    MessageServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' }
    };

    TestBed.configureTestingModule({

      providers: [{ provide: MessageService, useValue: MessageServiceStub }],
      declarations: [
        AppComponent,
        RouterLinkStubDirective, RouterOutletStubComponent, MessagesComponent
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
      });

    // UserService from the root injector
    messageService = TestBed.get(MessageService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    // de = fixture.debugElement.query(By.css('.welcome'));
    // el = de.nativeElement;
  }));
  tests();
});

//////// Testing w/ NO_ERRORS_SCHEMA //////

//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
// import { AppModule } from './app.module';
// import { AppRoutingModule } from './app-routing.module';

// describe('AppComponent & AppModule', () => {

//   beforeEach(async(() => {

//     TestBed.configureTestingModule({
//       imports: [AppModule]
//     })

//       // Get rid of app's Router configuration otherwise many failures.
//       // Doing so removes Router declarations; add the Router stubs
//       .overrideModule(AppModule, {
//         remove: {
//           imports: [AppRoutingModule]
//         },
//         add: {
//           declarations: [RouterLinkStubDirective, RouterOutletStubComponent, MessagesComponent]
//         }
//       })

//       .compileComponents()

//       .then(() => {
//         fixture = TestBed.createComponent(AppComponent);
//         comp = fixture.componentInstance;
//       });
//   }));

//   tests();
// });

function tests() {

  // let links: RouterLinkStubDirective[];
  // let linkDes: DebugElement[];

  // beforeEach(() => {
  //   // trigger initial data binding
  //   fixture.detectChanges();

  //   // find DebugElements with an attached RouterLinkStubDirective
  //   linkDes = fixture.debugElement
  //     .queryAll(By.directive(RouterLinkStubDirective));

  //   // get the attached link directive instances using the DebugElement injectors
  //   links = linkDes
  //     .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  // });

  it('true is true', () => expect(true).toBe(true));

  it('stub object and injected UserService should not be the same', () => {
    expect(MessageServiceStub === messageService).toBe(false);
    // Changing the stub object has no effect on the injected service
    MessageServiceStub.isLoggedIn = false;
    expect(messageService.isLoggedIn).toBe(true);
  });

}