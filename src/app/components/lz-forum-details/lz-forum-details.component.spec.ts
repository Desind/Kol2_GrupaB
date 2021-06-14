import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LZForumDetailsComponent } from './lz-forum-details.component';

describe('LZForumDetailsComponent', () => {
  let component: LZForumDetailsComponent;
  let fixture: ComponentFixture<LZForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LZForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LZForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
