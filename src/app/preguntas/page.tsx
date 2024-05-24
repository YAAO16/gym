'use client';

import React, { useState, ChangeEvent } from 'react';
import { Container, Grid, Paper, Select, MenuItem, TextField, Typography, Button, SelectChangeEvent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import validateAnswers from './Validacion';

function Page() {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>(['', '']);
  const [answers, setAnswers] = useState<string[]>(['', '']);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const availableQuestions = [
    '¿Cuál es el nombre de tu primera mascota?',
    '¿En qué ciudad nació tu madre?',
    '¿Cuál es tu comida favorita?',
  ];

  const handleQuestionSelect = (event: SelectChangeEvent<string>, index: number) => {
    const newSelectedQuestions = [...selectedQuestions];
    newSelectedQuestions[index] = event.target.value;
    setSelectedQuestions(newSelectedQuestions);
  };

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validateAnswers(answers);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      console.log('Preguntas:', selectedQuestions);
      console.log('Respuestas:', answers);
      setSubmitted(true);
      window.location.href = '/login';
    }
  };

  return (
    <Grid container style={{ height: '100vh', background: '#0c0c1b' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          background: '#0c0c1b',
          backgroundImage: 'url(https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#0c0c1b', color: '#FFA500' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={10} sm={8} md={6}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom style={{ fontSize: '50px', color: '#FFA500' }}>
                PREGUNTAS DE SEGURIDAD
              </Typography>
            </div>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
              {[0, 1].map((index) => (
                <React.Fragment key={index}>
                  <Select
                    fullWidth
                    variant="outlined"
                    value={selectedQuestions[index]}
                    onChange={(event) => handleQuestionSelect(event as SelectChangeEvent<string>, index)}
                    displayEmpty
                    sx={{ color: '#FFA500' }}
                  >
                    <MenuItem value="" disabled>
                      Seleccione una pregunta
                    </MenuItem>
                    {availableQuestions.map((question, idx) => (
                      <MenuItem key={idx} value={question}>
                        {question}
                      </MenuItem>
                    ))}
                  </Select>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={answers[index]}
                    onChange={(event) => handleAnswerChange(event, index)}
                    sx={{ '& .MuiOutlinedInput-root': { borderColor: '#FFA500', color: '#FFA500' }, mt: 2 }}
                  />
                </React.Fragment>
              ))}
              {error && <Typography variant="body2" color="error" gutterBottom>{error}</Typography>}
              <Button type="submit" variant="contained" style={{ backgroundColor: '#FFA500', color: '#0c0c1b', marginTop: '1rem', fontSize: '15px' }} fullWidth endIcon={<SendIcon />} sx={{ '&:hover': { backgroundColor: '#FFA500' } }}>
                Enviar respuestas
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page;



