import { CartsComponent } from './carts/components/carts/carts.component';
import { EventComponent } from './events/components/event/event.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'event',component:EventComponent},
  {path:'cart',component:CartsComponent},
  {path:'**',redirectTo:"event",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
