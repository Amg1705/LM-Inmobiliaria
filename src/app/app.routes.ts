import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { IniciarsesionComponent } from './paginas/iniciarsesion/iniciarsesion.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { PagoComponent } from './paginas/pago/pago.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'iniciar-sesion', component: IniciarsesionComponent },
  { path: 'sobre-nosotros', component: SobrenosotrosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: NotFoundComponent },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./paginas/detalle-propiedad/detalle-propiedad.component').then(
        m => m.DetallePropiedadComponent
      )
  }
];
