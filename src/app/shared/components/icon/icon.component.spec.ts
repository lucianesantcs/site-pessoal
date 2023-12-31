import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { LucideAngularModule, MoveRight } from 'lucide-angular';
import { IconComponent } from './icon.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('IconComponent', () => {
  let component: IconComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent, LucideAngularModule.pick({ MoveRight })],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set the default svg on name @input to icon MoveRight if none is provided', () => {
  //   const svgMoveRightMock = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-MoveRight"><path d="M18 8L22 12L18 16" key="1r0oui"></path><path d="M2 12H22" key="1m8cig"></path></svg>`;

  //   const nameDe = componentDe.query(By.css('lucide-icon'));
  //   const nameDeElement = nameDe.nativeElement;

  //   expect(nameDeElement.innerHTML).toEqual(svgMoveRightMock);
  // });

  it('should allow setting the name @input to a non-default value', () => {
    component.name = 'Mail';
    expect(component.name).toBe('Mail');
  });

  // it('should only allow the name input to be Lucide Icon type', () => {
  //   // TODO: verificar valores component.name com IconType
  // });

  it('should have strokeWidth fixed size 1.5', () => {
    expect(component.strokeWidth).toBe(1.5);
  });
});
