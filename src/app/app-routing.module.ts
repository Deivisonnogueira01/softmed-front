
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { CasoClinicosListComponent } from "./components/caso-clinicos-list/caso-clinicos-list.component";
import { CasosClinicosCreateComponent } from "./components/casos-clinicos-create/casos-clinicos-create.component";
import { CasosClinicosViewComponent } from "./components/casos-clinicos-view/casos-clinicos-view.component";
import { HipoteseDiagnosticaComponent } from "./components/hipotese-diagnostica/hipotese-diagnostica.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { ExamesFisicosComponent } from "./components/exames-fisicos/exames-fisicos.component";


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: "home", component: HomeComponent },

      { path: "casos-clinicos", component: CasoClinicosListComponent },
      { path: "casos-clinicos/view/:casoClinicoId", component: CasosClinicosViewComponent },

      {path: "hipotese-diagnostica", component: HipoteseDiagnosticaComponent},

      {path: "create", component: CasosClinicosCreateComponent, canActivate: [AuthGuard]},

      {path: "create-exame-fisico", component: ExamesFisicosComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
