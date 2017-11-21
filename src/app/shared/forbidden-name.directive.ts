import { Directive, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validator, Validators, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {

    return (control: AbstractControl) => {

        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;

    };
}

@Directive({
    selector: '[forbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator, OnInit {

    validator: ValidatorFn;

    @Input() forbiddenName: string;

    ngOnInit() {
        // alert("ok->" + this.forbiddenName)
        this.validator = forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))
    }

    @HostListener('mouseenter') onMouseEnter() {
        // alert("valor: " + this.forbiddenName)
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

