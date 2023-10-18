import { Especialidade } from "../enums/especialidade";
import { Patologia } from "../enums/patologia";

export class CasoClinico {

    casoClinicoId?: any;

    numero: number;

    nomePaciente: string;

    idadePaciente: number;

    alturaPaciente: number;

    pesoPaciente: number;

    sexoPaciente: string;

    corPaciente: string;

    profissaoPaciente: string;

    religiaoPaciente: string;

    naturalPaciente: string;

    residentePaciente: string;

    historiaDoencaAtual: string;

    queixaPrincipal: string;

    interrogatorioDiversosAparelhos: string;

    historiaPatologicaPregressa: string;

    historiaFamiliar: string;

    historiaPsicossocial: string;

    tipoEspecialidade: Especialidade;

    especialidade : Especialidade;

    patologia: Patologia;
      
}