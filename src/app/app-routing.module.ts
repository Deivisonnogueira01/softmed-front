
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CasosClinicosComponent } from "./components/casos-clinicos/casos-clinicos.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";


const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: '', component: NavComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "casos-clinicos-form", component: CasosClinicosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
