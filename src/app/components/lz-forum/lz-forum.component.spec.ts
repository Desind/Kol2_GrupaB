import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LZForumComponent } from './lz-forum.component';

describe('LZForumComponent', () => {
  let component: LZForumComponent;
  let fixture: ComponentFixture<LZForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LZForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LZForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
