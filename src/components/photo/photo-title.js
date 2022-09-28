import React, { useContext } from 'react';

import { Box, Typography } from '@mui/material';
import { Context } from '../../context/Context';

export const ProductListToolbar = () => {
  const ctx = useContext(Context);
  return (
    <Box
      display="flex"
      justifycontent="center"
      alignItems="center"
      // minHeight="25vh"
      sx={{
        background: 'rgb(255, 246, 241)',
      }}
    >
      <Typography sx={{ m: 1 }} variant="h6">
        Historical Photos from {`${ctx.name}`}
        {/* - Fotos Históricas de{' '} {`${ctx.name}`} */}
      </Typography>
    </Box>
  );
};
