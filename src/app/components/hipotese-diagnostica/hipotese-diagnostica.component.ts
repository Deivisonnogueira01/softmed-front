import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CasoClinico } from 'src/app/model/caso-clinico';

@Component({
  selector: 'app-hipotese-diagnostica',
  templateUrl: './hipotese-diagnostica.component.html',
  styleUrls: ['./hipotese-diagnostica.component.css']
})
export class HipoteseDiagnosticaComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

 

  openDialog() {
    const dialogRef = this.dialog.open(CasoClinico, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}


