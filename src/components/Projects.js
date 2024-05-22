import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import project1 from '../Assets/event_manage.jpg';  // Adjust the paths to project images
import project2 from '../Assets/grading img.jpg';
import project3 from '../Assets/portfolio img.jpeg';

const projects = [
  {
    image: project1,
    title: 'Event Management System',
    description: 'This is a description of project one. It highlights my role and the outcome of the project.',
    role: 'Lead Developer',
    outcome: 'Successfully launched the project which improved user engagement by 40%.'
  },
  {
    image: project2,
    title: 'Online Grading System',
    description: 'This is a description of project two. It highlights my role and the outcome of the project.',
    role: 'Frontend Developer',
    outcome: 'Redesigned the user interface, resulting in a 25% increase in user satisfaction.'
  },
  {
    image: project3,
    title: 'My Portfolio Websitess',
    description: 'This is a description of project three. It highlights my role and the outcome of the project.',
    role: 'Backend Developer',
    outcome: 'Optimized the backend, reducing server response time by 50%.'
  }
];

const Projects = () => (
  <Container maxWidth="md" style={{ marginTop: '50px' }}>
    <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: '50px' }}>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Box marginTop={2}>
                <Typography variant="body2" component="p">
                  <strong>Role:</strong> {project.role}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Outcome:</strong> {project.outcome}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
