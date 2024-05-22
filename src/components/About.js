import React from 'react';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import me from '../Assets/n_logo.jpg';  // Adjust the path to your image file

const About = () => (
  <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      About Me
    </Typography>
    <Avatar
      alt="Your Name"
      src={me}
      style={{ width: '150px', height: '150px', margin: '20px auto' }}
    />
    <Typography variant="h5" component="h2">
      Nishil Raiyarela
    </Typography>
    <Typography variant="body1" component="p" paragraph style={{ marginTop: '20px' }}>
      I am Nishil, a passionate software developer with a keen interest in building
      impactful applications. With a background in IT, I specialize in 
      Engineer. My goal is to continuously improve my skills and contribute
      to meaningful projects that make a difference.
    </Typography>
    <Box marginTop={4}>
      <Button
        variant="contained"
        color="primary"
        href="/Nishil_ProfessionalResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume (PDF)
      </Button>
    </Box>
  </Container>
);

export default About;
