import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPruebaNgforComponent } from './comp-prueba-ngfor.component';

describe('CompPruebaNgforComponent', () => {
  let component: CompPruebaNgforComponent;
  let fixture: ComponentFixture<CompPruebaNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPruebaNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPruebaNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
