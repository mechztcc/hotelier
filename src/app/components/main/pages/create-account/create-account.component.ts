import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';



type FormErros = {
  email: string[] | any,
  password: string[] | any,
  phone: string[] | any
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent implements OnInit {

  public form: FormGroup

  public flag: boolean = true;


 
  constructor(private titlePage: Title, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Create account')
    
    
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])]
    })
  }

}
