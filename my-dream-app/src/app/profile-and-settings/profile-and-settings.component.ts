import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-and-settings',
  templateUrl: './profile-and-settings.component.html',
  styleUrls: ['./profile-and-settings.component.css']
})
export class ProfileAndSettingsComponent implements OnInit {
    profileAndSettingsForm : FormGroup;
    incomeEl: FormControl;
    nameEl: FormControl;

    constructor() { }

    ngOnInit() {
        this.profileAndSettingsForm = new FormGroup({
            name: new FormControl( '', Validators.required ),
            finance: new FormGroup({
                income: new FormControl( '' ),
                budget: new FormControl( '' )
            })
        });

        console.log( this.profileAndSettingsForm );

        this.incomeEl = <FormControl>(this.profileAndSettingsForm.get('finance.income'));
        this.nameEl = <FormControl>(this.profileAndSettingsForm.get('name'));
    }
}
