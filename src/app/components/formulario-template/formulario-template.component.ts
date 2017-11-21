/* tslint:disable: member-ordering */
import { Component } from '@angular/core';
// import { JuriNameValidator } from '../../shared/juriName.validator';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './formulario-template.component.html'
})
export class FormularioTemplateComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { email: '', juri: '', name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], password: '', confirmPassword: '' };

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/