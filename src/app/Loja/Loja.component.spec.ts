/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LojaComponent } from './Loja.component';

describe('LojaComponent', () => {
  let component: LojaComponent;
  let fixture: ComponentFixture<LojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
