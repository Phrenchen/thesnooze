import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixcloudComponent } from './mixcloud/mixcloud.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AboutComponent } from './components/about/about.component';
import { ArtComponent } from './art/art.component';


const routes: Routes = [
  { path: '', component: StartpageComponent, pathMatch: 'full' },
  { path: 'mixcloud', component: MixcloudComponent },
  { path: 'art', component: ArtComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
