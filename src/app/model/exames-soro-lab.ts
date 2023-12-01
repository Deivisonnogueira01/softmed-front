export class ExamesSoroLab {


    idExameSoroLabDTO?: number;

    examesSoroDTOCorreto: string;

    examesSoroDTOIncorreto: string;

    idCasoClinico: number;


    constructor(examesSoroDTOCorreto: string, examesSoroDTOIncorreto: string, idCasoClinico: number) {
        this.examesSoroDTOCorreto = examesSoroDTOCorreto;
        this.examesSoroDTOIncorreto = examesSoroDTOIncorreto;
        this.idCasoClinico = idCasoClinico;
    }
}