interface User {
    username: string;
    password: string;
  }
  
  export function validateLogin(user: User): string | null {
    const validUsername = 'usuario';
    const validPassword = 'contraseña'; 
  
    if (user.username === validUsername && user.password === validPassword) {
      return null; 
    } else {
      return 'Usuario o contraseña incorrectos'; 
    }
  }
  