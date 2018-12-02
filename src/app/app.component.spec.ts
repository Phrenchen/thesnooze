import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Routes, Router} from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { MixcloudComponent } from './mixcloud/mixcloud.component';
import { ArtComponent } from './art/art.component';
import { AboutComponent } from './about/about.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';


let location: Location;
let router: Router;
let fixture;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

// test routing
const routes: Routes = [
  { path: '', component: StartpageComponent, pathMatch: 'full' },
  { path: 'mixcloud', component: MixcloudComponent },
  { path: 'art', component: ArtComponent },
  { path: 'about', component: AboutComponent }

];



describe('Router: App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        StartpageComponent,
        MixcloudComponent,
        ArtComponent,
        AboutComponent,
        PageHeaderComponent
      ]
    });
  });

  router = TestBed.get(Router);
  location = TestBed.get(Location);

  fixture = TestBed.createComponent(AppComponent);
  router.initialNavigation();

});

it('navigate to "" Startpage', fakeAsync(() => {
  // router.navigate(['']);
  // tick();
  // expect(location.pathname).toBe('/');

}));
