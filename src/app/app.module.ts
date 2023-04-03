import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
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
import { CasosClinicosViewComponent } from './components/casos-clinicos-view/casos-clinicos-view.component';
import { CasosClinicosComponent } from "./components/casos-clinicos/casos-clinicos.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { AuthInterceptorProvider } from "./interceptors/auth.interceptor";
//import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CasosClinicosComponent,
    CasoClinicosListComponent,
    CasosClinicosViewComponent,
  //  QuizComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
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
