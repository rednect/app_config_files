interface IUsers {
    id: number;  
    numero_usuario: string;
    senha?: string;
    estado_login?: boolean;
  }
  
  interface LoginReturn {
    id?: number;
    token?: string;
    numero_usuario: string;
    estado_login: boolean;
  }
  
  interface LogoutReturn {
    numero_usuario: string;
    message: string;
  }
  
  interface UserLogin {
    numero_usuario: string;
    senha?: string;
  }
  
  export {
    LoginReturn,
    LogoutReturn,
    IUsers,
    UserLogin
  }