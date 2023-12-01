export class ExamesImagem {

    idExameImagemDTO?: number;

    examesImagemCorreto: string;

    examesImagemIncorretos: string;

    idCasoClinico: number;  // Adicionando a referência ao caso clínico

    constructor(examesImagemCorreto: string, examesImagemIncorretos: string, idCasoClinico: number) {
        this.examesImagemCorreto = examesImagemCorreto;
        this.examesImagemIncorretos = examesImagemIncorretos;
        this.idCasoClinico = idCasoClinico;
    }
}
