import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  textbox: string = '';
  textboxCtr : AbstractControl;

  constructor(private fb: FormBuilder) { }

  createForm() :void {
    this.form = this.fb.group({
      textbox: [ this.textbox ]
    });
    this.textboxCtr = this.form.get('textbox');
  }

  ngOnInit() :void {
    this.createForm();
  }

}
