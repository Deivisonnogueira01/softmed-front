
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CasoClinicosListComponent } from "./components/caso-clinicos-list/caso-clinicos-list.component";
import { CasosClinicosViewComponent } from "./components/casos-clinicos-view/casos-clinicos-view.component";
import { CasosClinicosComponent } from "./components/casos-clinicos/casos-clinicos.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { AuthGuard } from "./auth/auth.guard";
import { HipoteseDiagnosticaComponent } from "./components/hipotese-diagnostica/hipotese-diagnostica.component";


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: "home", component: HomeComponent },

      { path: "casos-clinicos", component: CasoClinicosListComponent },
      { path: "casos-clinicos/view/:casoClinicoId", component: CasosClinicosViewComponent },

      {path: "hipotese-diagnostica", component: HipoteseDiagnosticaComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
