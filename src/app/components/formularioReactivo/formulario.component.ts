import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive'


@Component({
  selector: 'app-hero-form-template',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  heroForm: FormGroup;

  // constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo, [
        Validators.required,
      ]),
      'power': new FormControl(this.hero.power, Validators.required),
      'email': new FormControl(this.hero.email, [
        Validators.email
      ])
    });
  }


  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.dasdas', email: '', alterEgo: '', power: this.powers[0] };

  get name() { return this.heroForm.get('name'); }
  get power() { return this.heroForm.get('power'); }
  get alterEgo() { return this.heroForm.get('alterEgo'); }
  get email() { return this.heroForm.get('email'); }

  onSubmit(model) {
    alert(model)
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/