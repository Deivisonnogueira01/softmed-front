import { Especialidade } from "../enums/especialidade";
import { Patologia } from "../enums/patologia";
import { ExamesFisicos } from "./exames-fisicos";
import { ExamesImagem } from "./exames-imagem";
import { ExamesSoroLab } from "./exames-soro-lab";
import { TestesFarmacologicos } from "./testes-farmacologicos";

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

    condutaTerapeutica: string;

    tipoEspecialidade: Especialidade;

    especialidade : Especialidade;

    patologia: Patologia;
      
    examesSoroLab: ExamesSoroLab[];

    examesImagem: ExamesImagem[];

    examesFisicos: ExamesFisicos[];

    examesTestesFarma: TestesFarmacologicos[];
}