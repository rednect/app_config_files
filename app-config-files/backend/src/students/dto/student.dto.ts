interface CreateStudent {
  nome_aluno: string;

  tia: string;

  curso_aluno: string;

  sala_aluno: string;

  frequencia_aluno: number;
}

interface StudentReturn {
  id: number;
  nome_aluno: string;
  tia: string;
  student_details?: {
    id: number;
    nome_aluno: string;
    tia: string;
    curso_aluno: string;
    sala_aluno: string;
    frequencia_aluno: string;
  }
}

export {
  CreateStudent,
  StudentReturn
}