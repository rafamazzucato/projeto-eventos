import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NotFoundComponent } from './components/erro/notFound.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
       { path: "eventos", component: CadastroComponent },
       { path: "home", component: HomeComponent },
       { path: "**", component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
