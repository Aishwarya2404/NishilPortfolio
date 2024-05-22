import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import project1 from '../Assets/event_manage.jpg';  // Adjust the paths to project images
import project2 from '../Assets/grading img.jpg';
import project3 from '../Assets/portfolio img.jpeg';

// Service data with images
const services = [
  {
    title: 'Web Development',
    description: 'Create custom websites tailored to your needs.',
    image: project1,
  },
  {
    title: 'Mobile App Development',
    description: 'Design and develop mobile applications for iOS and Android platforms.',
    image: project2,
  },
  {
    title: 'UI/UX Design',
    description: 'Craft user-friendly interfaces and experiences for your applications.',
    image: project3,
  },
];

const Services = () => (
  <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
