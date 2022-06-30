/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicosComponent } from './Servicos.component';

describe('ServicosComponent', () => {
  let component: ServicosComponent;
  let fixture: ComponentFixture<ServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
