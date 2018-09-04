import { Pessoa } from "./pessoa";
import { Servico } from "./servico";

export class Matricula{
    pessoa: Pessoa;
    dataInicio: Date;
    dataFinal: Date;
    servicos:Servico[];

}