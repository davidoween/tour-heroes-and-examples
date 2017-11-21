import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, FormControl, NG_ASYNC_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Observable } from "rxjs";

@Directive({
    selector: "[asyncValidator][formControlName], [asyncValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => AsyncValidator), multi: true
        }
    ]
})
export class AsyncValidator implements Validator {

    validator: ValidatorFn;

    validate(c: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
        return this.validateUniqueEmailPromise(c.value);
    }

    validateUniqueEmailObservable(email: string) {
        return new Observable(observer => {
            if (email === "1@gmail.com") {
                observer.next({ asyncInvalid: true });
            } else {
                observer.next(null);
            }
        });
    }

    validateUniqueEmailPromise(email: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email === "1@gmail.com") {
                    resolve({
                        asyncInvalid: true
                    })
                } else {
                    resolve(null);
                }
            }, 2000);
        })
    }


}