import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {

  public form: FormGroup

  constructor(private titlePage: Title, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Create account')

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

}
