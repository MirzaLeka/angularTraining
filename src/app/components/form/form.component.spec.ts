import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let debugElement;
  let textbox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
      declarations: [ FormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.ngOnInit();
    textbox = component.form.controls['textbox'];
  });

  afterEach(() => {
    textbox.setValue('');
  });

  it('should create textbox', () => {
    expect(component).toBeTruthy();
  });

  it('should be optional', () => {
    expect(textbox.valid).toBeTruthy();
  });

  it('should be valid if populated', () => {
    textbox.setValue('random value');
    expect(textbox.valid).toBeTruthy();
  });

  it('should not be disabled', () => {
    expect(textbox.disabled).toBeFalsy();
  });

  it('should have placeholder', () => {
    const { placeholder } = debugElement.query(By.css('input')).nativeElement;
    expect(placeholder).toBeTruthy();
  });

  it('should be able to write any character', () => {
    textbox.setValue('abc');
    expect(textbox.valid).toBeTruthy();

    textbox.setValue(123);
    expect(textbox.valid).toBeTruthy();

    textbox.setValue('!#@#?%&\'\"\`/()=/*-+$');
    expect(textbox.valid).toBeTruthy();
  });

});





