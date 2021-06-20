import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalcardsComponent } from './MyComponents/animalcards/animalcards.component';
import { CarddetailsComponent } from './MyComponents/carddetails/carddetails.component';

const routes: Routes = [
  {path: '', component: AnimalcardsComponent},
  {path: 'about', component: CarddetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
