import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './pages/top-page/top-page.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./pages/').then((mod) => mod.PagesModule),
    component: TopPageComponent,
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
