import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReciepeFormComponent } from './create-reciepe-form.component';

describe('CreateReciepeFormComponent', () => {
  let component: CreateReciepeFormComponent;
  let fixture: ComponentFixture<CreateReciepeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateReciepeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReciepeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
