import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {User} from "../models/user";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {NmcService} from "../services/nmc_service";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {VALID} from "@angular/forms/src/model";
@Component({
  selector: 'nmc-store-info',
  styleUrls: ['../css/cards.css'],
  templateUrl: "store-info.html"

})
export class NmcStoreInfoComponent implements OnInit {
  storeForm: FormGroup;

  country: FormControl

  private cities: Array<any> =
    [
      {name: 'Amsterdam', value: '1', disabled: false},
      {name: 'Birmingham', value: '2', disabled: false},
      {name: 'Dortmund', value: '3', disabled: false},
      {name: 'Gothenburg', value: '4', disabled: true},
      {name: 'London', value: '5', disabled: false},
      {name: 'Seville', value: '6', disabled: false}
    ];

  ngOnInit(): void {
    this.country = new FormControl()
    this.country.valueChanges.subscribe(val => console.log(val));
  }

  constructor(private formBuilder: FormBuilder, private ds: NmcService, private router: Router, private snackBar: MdSnackBar) {

    this.storeForm = formBuilder.group({
      'storeName': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'addr1': ['', Validators.required],
      'addr2': ['']

    });
  }

  onSubmit() {

  }

  change(value: any) {
    console.log('Selected value is: ', value);
  }

}
