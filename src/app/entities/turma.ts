import {Modalidade} from './modalidade';
import { Pessoa } from './pessoa';

export class Turma{
    nome: string;
    descricao: string;
    modalidade: Modalidade;
    alunos:Pessoa[];
}