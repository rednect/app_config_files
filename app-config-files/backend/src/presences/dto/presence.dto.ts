import { CreateProfessor } from "src/professors/dto/professor.dto";

interface CreatePresence {
  idAluno: number;
  numero_da_aula: number;
  presenca: boolean;
  idProfessor?: number;
  professor?: CreateProfessor
}

export {
  CreatePresence
}