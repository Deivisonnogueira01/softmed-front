export class ExamesFisicos {


    idExameFisicoDTO?: number;

    examesFisicosCorretoDTO: string;

    examesFisicosIncorretoDTO: string;

     idCasoClinico: number;


     constructor(examesFisicosCorretoDTO: string, examesFisicosIncorretoDTO: string, idCasoClinico: number) {
        this.examesFisicosCorretoDTO = examesFisicosCorretoDTO;
        this.examesFisicosIncorretoDTO = examesFisicosIncorretoDTO;
        this.idCasoClinico = idCasoClinico;
    }

}