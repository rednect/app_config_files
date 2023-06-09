interface CreateStudent {
  nome_aluno: string;

  curso_aluno: string;

  sala_aluno: string;

  tia: string;
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
    tia: string;
  }
}

export {
  CreateStudent,
  StudentReturn,
  RegisterStudentInClass
}