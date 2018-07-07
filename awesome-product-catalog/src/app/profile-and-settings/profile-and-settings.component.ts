import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl, MinLengthValidator } from '@angular/forms'

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-profile-and-settings',
  templateUrl: './profile-and-settings.component.html',
  styleUrls: ['./profile-and-settings.component.css']
})
export class ProfileAndSettingsComponent implements OnInit {
    profileAndSettingsForm : FormGroup;
    nameInput : FormControl;
    emailInput : FormControl;
    subscribeInput : FormControl;
    budgetInput : FormControl;
    incomeInput : FormControl;
    finance : FormGroup;
    topics : FormArray;

    emailInputErrorMessage : string = '';

    validationMessages = {
        email: {
            required: 'Email is required',
            pattern: 'Email is not valid'
        }
    }

    constructor( private _fb : FormBuilder ) { }

    ngOnInit() {
        // this.profileAndSettingsForm = new FormGroup({
        //     name: new FormControl( '', Validators.required ),
        //     email: new FormControl( '', Validators.required ),
        //     subscribe: new FormControl( true )
        // });

        this.profileAndSettingsForm = this._fb.group({
            name: [ '', [ Validators.required, Validators.minLength(3) ] ],
            email: [ '', [ Validators.required, Validators.maxLength(50), Validators.pattern( '[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_.]+' ) ] ],
            subscribe: { value: true, disabled: false },
            frequency: 'weekly',
            topics: new FormArray( [ new FormControl( 'Books' ) ] ),
            finance: this._fb.group({
                budget: [ '', this.range( 100, 10000 ) ],
                income: [ '', this.range( 100, 10000 ) ]
            }, { validator: this.budgetWithinIncome } )
        });

        this.nameInput = <FormControl>this.profileAndSettingsForm.get( 'name' );
        this.emailInput = <FormControl>this.profileAndSettingsForm.get( 'email' );
        this.subscribeInput = <FormControl>this.profileAndSettingsForm.get( 'subscribe' );
        this.topics = <FormArray>this.profileAndSettingsForm.get( 'topics' );
        this.budgetInput = <FormControl>this.profileAndSettingsForm.get( 'finance.budget' );
        this.incomeInput = <FormControl>this.profileAndSettingsForm.get( 'finance.income' );
        this.finance = <FormGroup>this.profileAndSettingsForm.get( 'finance' );

        // observing value changes
        this.subscribeInput.valueChanges.subscribe(
            value => this.updateSubscription()
        );

        this.emailInput.valueChanges.debounceTime(1000).subscribe(
            value => this.emailInputErrorMessage = this.setMessage( this.emailInput, 'email' )
        );
    }

    setMessage( c: AbstractControl, inputName : string ) : string {
        if( c.invalid && ( c.touched || c.dirty ) ) {
            return Object.keys( c.errors ).map( key => this.validationMessages[inputName][key] ).join( '' );
        } else {
            return '';
        }
    }

    budgetWithinBounds( c: AbstractControl ) : { [ key : string ] : boolean } | null {
        if( c.value > 100000 ) {
            return { budgetBeyondBound: true };
        } else {
            return null;
        }
    }

    budgetWithinIncome( c: AbstractControl ) : { [ key : string ] : boolean } | null {
        if( c.get( 'budget' ).value > c.get( 'income' ).value ) {
            return { budgetBeyondIncome: true };
        } else {
            return null;
        }
    }

    range( min, max ) {
        return ( c: AbstractControl ) : { [ key : string ] : boolean } | null => {
            if( c.value > max ) {
                return { aboveMax: true };
            } else if( c.value < min ) {
                return { belowMin: true };
            } else {
                return null;
            }
        }
    }

    save() {
        console.log( this.profileAndSettingsForm );
    }

    reset() {
        this.profileAndSettingsForm.patchValue({
            name: '',
            email: '',
            subscribe: true
        });
    }

    updateSubscription() {
        if( !this.profileAndSettingsForm.get( 'subscribe' ).value ) {
            console.log( 'adding email required' );
            this.emailInput.setValidators( Validators.required );
        } else {
            console.log( 'removing email required' );
            this.emailInput.clearValidators();
        }

        this.emailInput.updateValueAndValidity();
    }

    addTopic() {
        this.topics.push( new FormControl( '' ) );
    }
}
