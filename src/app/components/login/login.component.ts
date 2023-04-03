import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Credenciais } from "./../../model/credencias";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: "",
    senha: "",
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void { }

  logar() {
    this.toast.error("Email e/ou Senha errados !", "Login");
    this.creds.senha = "";
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Authorization'))
    })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid

  }

}
