import { Box, Typography } from '@mui/material';

export const ProductListToolbar = (props) => (
  <Box
    display="flex"
     justifycontent="center"
    alignItems="center"
    // minHeight="25vh"
    sx={{
      background: 'rgb(255, 246, 241)',
    }}
  >
    <Typography sx={{ m: 1 }} variant="h5">
      Historical Photos from Bogota - Fotos Históricas de Bogotá
    </Typography>
  </Box>
);
