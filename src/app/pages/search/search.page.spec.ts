import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPage } from './search.page';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';


describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SearchPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();



    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
