export class ExamesImagem {

    idExameImagemDTO?: number;

    examesImagemCorreto: string;

    exameImagemIncorretos: string;

    casoClinicoId: number;  // Adicionando a referência ao caso clínico

    constructor(examesImagemCorreto: string, examesImagemIncorretos: string, idCasoClinico: number) {
        this.examesImagemCorreto = examesImagemCorreto;
        this.exameImagemIncorretos = examesImagemIncorretos;
        this.casoClinicoId = idCasoClinico;
    }
}
