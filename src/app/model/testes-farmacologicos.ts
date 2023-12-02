export class TestesFarmacologicos {

    idTestesDTO?: number;

    testesFarmaDTOCorreto: string;

    testesFarmaDTOIncorreto: string;

    casoClinicoId: number;

    constructor(testesFarmaDTOCorreto: string, testesFarmaDTOIncorreto: string, idCasoClinico: number) {
        this.testesFarmaDTOCorreto = testesFarmaDTOCorreto;
        this.testesFarmaDTOIncorreto = testesFarmaDTOIncorreto;
        this.casoClinicoId = idCasoClinico;
    }

}