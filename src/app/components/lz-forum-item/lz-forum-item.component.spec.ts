import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LZForumItemComponent } from './lz-forum-item.component';

describe('LZForumItemComponent', () => {
  let component: LZForumItemComponent;
  let fixture: ComponentFixture<LZForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LZForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LZForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
