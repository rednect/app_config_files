interface CreateStudent {
  nome_aluno: string;

  curso_aluno: string;

  sala_aluno: string;

  frequencia_aluno: number;
}

interface RegisterStudentInClass {
  nome_aluno: string;

  course_name: string;  
}

interface StudentReturn {
  id: number;
  nome_aluno: string;
  student_details?: {
    id: number;
    nome_aluno: string;
    curso_aluno: string;
    sala_aluno: string;
    frequencia_aluno: string;
  }
}

export {
  CreateStudent,
  StudentReturn,
  RegisterStudentInClass
}