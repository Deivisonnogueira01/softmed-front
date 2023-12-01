export class TestesFarmacologicos {

    idTestesDTO?: number;

    testesFarmaDTOCorreto: string;

    testesFarmaDTOIncorreto: string;

    idCasoClinico: number;

    constructor(testesFarmaDTOCorreto: string, testesFarmaDTOIncorreto: string, idCasoClinico: number) {
        this.testesFarmaDTOCorreto = testesFarmaDTOCorreto;
        this.testesFarmaDTOIncorreto = testesFarmaDTOIncorreto;
        this.idCasoClinico = idCasoClinico;
    }

}