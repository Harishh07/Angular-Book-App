import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it(`should have as title 'Home Screen'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Home Screen');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  // INSERT FORM

  it('should have a form element', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('should have a name input element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should have an author input element', () => {
    const authorInput = fixture.debugElement.query(By.css('input[name="author"]'));
    expect(authorInput).toBeTruthy();
  });

  it('should have a price input element', () => {
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));
    expect(priceInput).toBeTruthy();
  });

  it('should check the input type of price input element', () => {
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));
    expect(priceInput.attributes['type']).toBe('number');
  });

  it('should check the required validation of name input element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    
    expect(nameInput.nativeElement.value).toEqual('');
    expect(nameInput.nativeElement.placeholder).toEqual('Enter the Name');
    expect(nameInput.nativeElement.required).toBeTruthy();
    const name = fixture.debugElement.query(By.css('[name=name]')).nativeElement;
    expect(name.valid).toBeFalsy();

   
    
    const nameInputElement = nameInput.nativeElement;

    nameInputElement.value = 'HARISH';
    nameInputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(nameInputElement.value).toEqual(jasmine.any(String));

  });

  it('should check the required validation of author input element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="author"]'));
    
    expect(nameInput.nativeElement.value).toEqual('');
    expect(nameInput.nativeElement.placeholder).toEqual('Enter Author name');
    expect(nameInput.nativeElement.required).toBeTruthy();
    const name = fixture.debugElement.query(By.css('[name=author]')).nativeElement;
    expect(name.valid).toBeFalsy();

   
    const nameInputElement = nameInput.nativeElement;

    nameInputElement.value = 'New SAM';
    nameInputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(nameInputElement.value).toEqual(jasmine.any(String));

  });

  // Should alert the user on button click

  it('should display an alert when the button is clicked', () => {
    spyOn(window, 'alert');
    const button = fixture.nativeElement.querySelector('#submit');
    button.click();
    expect(window.alert).toHaveBeenCalledWith('Book Inserted Successfully');
  });


});


//UPDATE FORM


describe('YourComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule,HttpClientTestingModule],
      declarations: [LoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should have a form element', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  
  it('should have a name input element', () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should have an author input element', () => {
    const authorInput = fixture.debugElement.query(By.css('input[name="author"]'));
    expect(authorInput).toBeTruthy();
  });

  it('should have a price input element', () => {
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));
    expect(priceInput).toBeTruthy();
  });
  

  it('should create the form with input fields of correct types', () => {

    const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));

    const idInput = fixture.debugElement.query(By.css('input[name="id"]'));
   
    const authorInput = fixture.debugElement.query(By.css('input[name="author"]'));
    const priceInput = fixture.debugElement.query(By.css('input[name="price"]'));

    expect(nameInput.nativeElement.value).toEqual(jasmine.any(String));
    expect(authorInput.nativeElement.value).toEqual(jasmine.any(String));
    
    expect(priceInput.attributes['type']).toBe('number');

  });


  it('should display the correct label for the Name input', () => {
    de = fixture.debugElement.query(By.css('#name'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Enter the Name');
  });

  it('should display the correct label for the Author input', () => {
    de = fixture.debugElement.query(By.css('#author'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Enter Author\'s name');
  });

  it('should display the correct label for the Price input', () => {
    de = fixture.debugElement.query(By.css('#price'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Enter price');
  });

});
