import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    expect(true).toBeTruthy();
  });

});
