export class ExamesFisicos {


    idExameFisicoDTO?: number;

    examesFisicosCorretoDTO: string;

    examesFisicosIncorretoDTO: string;

    casoClinicoId: number;


     constructor(examesFisicosCorretoDTO: string, examesFisicosIncorretoDTO: string, idCasoClinico: number) {
        this.examesFisicosCorretoDTO = examesFisicosCorretoDTO;
        this.examesFisicosIncorretoDTO = examesFisicosIncorretoDTO;
        this.casoClinicoId = idCasoClinico;
    }

}