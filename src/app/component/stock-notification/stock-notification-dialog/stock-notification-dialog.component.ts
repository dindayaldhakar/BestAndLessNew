import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'cx-stock-notification-dialog',
  templateUrl: './stock-notification-dialog.component.html',
})
export class CustomStockNotificationDialogComponent implements OnInit, OnDestroy {
  
  addNotifyForm!: FormGroup;
  manageNotifyForm!: FormGroup;
  emailSection: boolean = true;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addNotifyForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password:  ['', [Validators.required]]
    });
    this.manageNotifyForm = this.formBuilder.group({
      mobileNo:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  onSubmit(){
    this.emailSection = false;
    console.log(this.addNotifyForm.controls);

  }

  ngOnDestroy(): void {
    
  }
}
