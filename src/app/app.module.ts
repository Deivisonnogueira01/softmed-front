import { HipotesTestesFarmaComponent } from './components/hipotese-testes-farma/hipotese-testes-farma.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ToastrModule } from "ngx-toastr";
import { CasoClinicosListComponent } from './components/caso-clinicos-list/caso-clinicos-list.component';
import { CasosClinicosCreateComponent } from './components/casos-clinicos-create/casos-clinicos-create.component';
import { CasosClinicosViewComponent } from './components/casos-clinicos-view/casos-clinicos-view.component';
import { ExamesFisicosComponent } from './components/exames-fisicos/exames-fisicos.component';
import { ExamesImagemComponent } from './components/exames-imagem/exames-imagem.component';
import { ExamesSoroLabComponent } from './components/exames-soro-lab/exames-soro-lab.component';
import { HeaderComponent } from "./components/header/header.component";
import { HipoteseDiagnosticaComponent } from './components/hipotese-diagnostica/hipotese-diagnostica.component';
import { HipoteseExamesFisicosComponent } from './components/hipotese-exames-fisicos/hipotese-exames-fisicos.component';
import { HipoteseExamesSoroComponent } from "./components/hipotese-exames-soro/hipotese-exames-soro.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { TestesFarmaComponent } from './components/testes-farma/testes-farma.component';
import { AuthInterceptorProvider } from "./interceptors/auth.interceptor";
import { HipoteseExamesImagemComponent } from "./components/hipotese-exames-imagem/hipotese-exames-imagem.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CasoClinicosListComponent,
    CasosClinicosViewComponent,
    HipoteseDiagnosticaComponent,
    CasosClinicosCreateComponent,
    ExamesFisicosComponent,
    ExamesSoroLabComponent,
    ExamesImagemComponent,
    TestesFarmaComponent,
    HipoteseExamesFisicosComponent,
    HipoteseExamesSoroComponent,
    HipoteseExamesImagemComponent,
    HipotesTestesFarmaComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatTabsModule,
    DragDropModule,
    MatToolbarModule,
    MatGridListModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
  ],

  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
