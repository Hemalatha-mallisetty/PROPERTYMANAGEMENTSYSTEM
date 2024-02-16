import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { UpdateComponent } from './update/update.component';
import { UpdateSuccessDialogComponent } from './update-success-dialog/update-success-dialog.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { TargetComponent } from './target/target.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

const routes: Routes = [
  { path: 'search-tickets', component: SearchTicketsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'update-success-dialog', component: UpdateSuccessDialogComponent },
  {path:'create', component:CreateComponent},
  {path:'search',component:SearchComponent},
  {path:'success-dialog',component:SuccessDialogComponent},
  {path:'target',component:TargetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
