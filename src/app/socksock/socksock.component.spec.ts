import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocksockComponent } from './socksock.component';

describe('SocksockComponent', () => {
  let component: SocksockComponent;
  let fixture: ComponentFixture<SocksockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocksockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocksockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
