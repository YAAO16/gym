const validateAnswers = (answers: string[]): string | null => {
    for (const answer of answers) {
      if (answer.trim() === '') {
        return 'Por favor, complete todas las respuestas.';
      }
    }
    return null;
  };
  
  const validAnswers = ['hendo', 'tokio'];
  
  const validateUserAnswers = (userAnswers: string[]): string | null => {
    const validationError = validateAnswers(userAnswers);
    if (validationError !== null) {
      return validationError;
    }
  
    for (const userAnswer of userAnswers) {
      if (!validAnswers.includes(userAnswer)) {
        return `La respuesta "${userAnswer}" no es válida.`;
      }
    }
  
    return null;
  };
  
  export default validateUserAnswers;