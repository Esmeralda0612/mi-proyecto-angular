// Removed duplicate export declaration of routes

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent}from './components/about-us/about-us.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'about', component: AboutUsComponent },
  { path: 'products', component: ProductoComponent },
  { path: 'cart', component: CarritoComponent },
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'user', component: UserComponent},

];

//

@NgModule({
    exports: [RouterModule],
    imports: [
      RouterModule.forRoot(routes), // Configura las rutas de la aplicación
      HomeComponent, // Import standalone component
      AboutUsComponent, // Import standalone component
      ProductoComponent, // Import standalone component
      CarritoComponent,
      NavbarComponent,
      FooterComponent,
      ContactoComponent,
      UserComponent,
      CatalogoComponent],
    providers: [],
    // Removed bootstrap array as AppComponent is a standalone component
  })
  export class AppModule { }
  