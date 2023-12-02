export class ExamesSoroLab {


    idExameSoroLabDTO?: number;

    examesSoroDTOCorreto: string;

    examesSoroDTOIncorreto: string;

    casoClinicoId: number;


    constructor(examesSoroDTOCorreto: string, examesSoroDTOIncorreto: string, idCasoClinico: number) {
        this.examesSoroDTOCorreto = examesSoroDTOCorreto;
        this.examesSoroDTOIncorreto = examesSoroDTOIncorreto;
        this.casoClinicoId = idCasoClinico;
    }
}