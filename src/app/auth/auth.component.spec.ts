import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { async } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let router: Router;
  let location: Location;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ FormsModule,RouterTestingModule  ],
      declarations: [ AuthComponent ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    component = new AuthComponent(routerSpy);
    fixture.detectChanges();
  });

  it(`should have as title 'Authentication Screen'`, () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Authentication Screen');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form inputs and submit the form', async (() => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    const form = fixture.debugElement.query(By.css('form'));
    const idInput = fixture.debugElement.query(By.css('#one'));
    const passwordInput = fixture.debugElement.query(By.css('#two'));
    const submitButton = fixture.debugElement.query(By.css('#submit'));
    const idError = fixture.debugElement.query(By.css('#id + span'));
    const passwordError = fixture.debugElement.query(By.css('#pwd + span'));
  
    // Test that the form is invalid initially
    fixture.detectChanges();
    expect(form.nativeElement.classList).toContain('ng-invalid');
    expect(submitButton.nativeElement.disabled).toBe(false);
  
    // Test that the form becomes valid when the inputs are filled
    idInput.nativeElement.value = 'harish';
    idInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.value = '123123';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(form.nativeElement.classList).toContain('ng-invalid');
    expect(submitButton.nativeElement.disabled).toBe(false);
  
    // Test that the form becomes invalid when the inputs are not filled
    idInput.nativeElement.value = '';
    idInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.value = '';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(form.nativeElement.classList).toContain('ng-invalid');
    expect(submitButton.nativeElement.disabled).toBe(false);

    //Test that the user enters the correct Username as in to Authenticate

    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    nameInput.nativeElement.value = 'harish';
    nameInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput.nativeElement.value).toEqual('harish');

    //Test that the user enters the correct Username as in to Authenticate

    const passInput = fixture.debugElement.query(By.css('input[name="password"]'));
    nameInput.nativeElement.value = '123123';
    nameInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput.nativeElement.value).toEqual('123123');

  
  }));

  // it should navigate to home page when the submit button is clicked
  
  it('should navigate to home page when nav() is called', () => {
    component.nav();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/home');
  });
 
});
