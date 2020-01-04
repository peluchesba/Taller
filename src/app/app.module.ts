import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/Header/header.component';
import { FooterComponent } from './Component/Footer/footer.component';
import { InicioComponent }  from './Component/Inicio/Inicio.component';
import { ContactoComponent } from './Component/Contacto/contacto.component';
import { NosotrosComponent } from './Component/nosotros/nosotros.component';
import { ServiciosComponent } from './Component/servicios/servicios.component';
import { NovedadesComponent } from './Component/novedades/novedades.component';
import { AseohogarComponent } from './Component/AseoHogar/Aseohogar.component';
import { AseoindustrialComponent } from './Component/AseoIndustrial/Aseoindustrial.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  //{ path: 'servicios', component: ServiciosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'AseoHogar',component: AseohogarComponent },
  { path: 'AseoIndustrial',component: AseoindustrialComponent},
  { path: '',component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    NovedadesComponent,
    AseohogarComponent,
    AseoindustrialComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
