import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemedyListComponent } from './remedy-list/remedy-list.component';
import { RemedyAddComponent } from './remedy-add/remedy-add.component';

const routes: Routes = [
	{path:"", component: RemedyListComponent},
	{path:"remedy-add", component: RemedyAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
