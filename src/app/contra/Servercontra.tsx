interface ContraCredentials {
    username: string;
  }
  
  export function validateContra(credentials: ContraCredentials): string | null {
    const { username } = credentials;

    if (!username.trim()) {
      return 'Por favor, ingresa tu nombre de a buscar usuario.';
    }

    if (username !== 'contra') {
      return 'usuario no encontrado';
    }

    return null;
  }