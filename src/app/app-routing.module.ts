import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './mixcloud/about/about.component';
import { MixcloudComponent } from './mixcloud/mixcloud.component';

const routes: Routes = [
  { path: '', component: MixcloudComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
