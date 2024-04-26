interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export function validateLogin(credentials: LoginCredentials): string | null {
    const { username, password } = credentials;

    if (!username.trim()) {
      return 'Por favor, ingresa tu nombre de usuario.';
    }
  
    if (!password.trim()) {
      return 'Por favor, ingresa tu contraseña.';
    }
  
    if (username !== 'admin' || password !== 'admin') {
      return 'Credenciales incorrectas. Por favor, intenta de nuevo.';
    }

    return null;
  }
  