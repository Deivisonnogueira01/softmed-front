import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casos-clinicos',
  templateUrl: './casos-clinicos.component.html',
  styleUrls: ['./casos-clinicos.component.css']
})
export class CasosClinicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: any;

  nome: string;
  altura: string;
  peso: string;
  sexo: string;
  cor: string;
  profissao: string;
  religiao: string;
  natural: string;
  residente: string;



}
