import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';
import { TerceraComponent } from './tercera/tercera.component';
import { CuartaComponent } from './cuarta/cuarta.component';

const routes: Routes = [
  {path:'principal', component:PrincipalComponent},
  {path:'' , redirectTo:'principal', pathMatch:'full'},
  {path:'principal', loadChildren:'./principal/principal.module#PrincipalModule'},
  {path:'segunda', component:SegundapantallaComponent},
  {path:'tercera', component:TerceraComponent},
  {path:'cuarta',component:CuartaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
