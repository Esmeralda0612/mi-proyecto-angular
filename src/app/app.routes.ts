// Removed duplicate export declaration of routes

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LibroComponent } from './components/libro/libro.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
export const routes: Routes = [

  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CarritoComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent},
  {path: 'libro/:id', component: LibroComponent},// Ruta para el componente LibroComponent
  {path: 'catalogo-productos/:id', component: CatalogoProductosComponent},// Ruta para el componente CatalogoComponent
];

//

@NgModule({
  exports: [RouterModule],
  imports: [
    LibroComponent,
    RouterModule.forRoot(routes), // Configura las rutas de la aplicación
    HttpClientModule, // Import HttpClientModule for HTTP requests
    CommonModule,
    NavbarComponent, // Import NavbarComponent
    FooterComponent, // Import FooterComponent
    CatalogoComponent, // Import CatalogoComponent
    CarritoComponent, // Import CarritoComponent
    AboutUsComponent, // Import AboutUsComponent
    HomeComponent, // Import HomeComponent
    ContactoComponent, // Import ContactoComponent
    UserComponent, // Import UserComponent
    CatalogoProductosComponent, // Import CatalogoProductosComponent
    PageNotFoundComponent // Import PageNotFoundComponent
    ],
  
      
      
  providers: [
    // Add any services you want to provide globally here
    
  ],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
