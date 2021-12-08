import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Stack } from "@mui/material";

const PageNotFound = () => {

  return (
    <Container >
      <Stack spacing={6} alignItems='center' justifyContent='center' sx={{ height: '100vh' }} >
        <Alert severity="error">Ooops... Page not found!</Alert>
        <Button variant='outlined' color="secondary" sx={{ fontWeight: 700 }} component={Link} to={`/`} >
          Back to home page
        </Button>
      </Stack>
    </Container>
  );
}

export default PageNotFound;