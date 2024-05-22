import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here (not fully functional initially)
    // Redirect user to Home Page after form submission
    history('/');
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: '20px'}}>
        Contact Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Contact Information
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Phone: 8782919287
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Email: nishilraiyarela@gmail.com
          </Typography>
          <Typography variant="body1" component="p">
            Address: ONTARIO, Canada
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            Send Us a Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Contact Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
