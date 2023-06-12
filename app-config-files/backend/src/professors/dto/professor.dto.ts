interface CreateProfessor {
  id?: number;
  nomeProfessor: string;
  tia: string;
}

interface UpdateProfessor {
  id: number;
  nomeProfessor: string;
  tia: string;
}

export {
  CreateProfessor,
  UpdateProfessor
}