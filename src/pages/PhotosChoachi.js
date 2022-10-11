import React, { useState, useContext } from 'react';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  Stack,
} from '@mui/material';

import { ProductListToolbar } from '../components/photo/photo-title';
import { ProductCard } from '../components/photo/photo-card';
import usePagination from './pagination';
import { Context } from '../context/Context';

const PhotosChoachi = (props) => {
  const ctx = useContext(Context);

  let [page, setPage] = useState(1);

  const PER_PAGE = 9;

  const count = Math.ceil(ctx.photos.length / PER_PAGE);
  const _DATA = usePagination(ctx.photos, PER_PAGE);

  const handleChange = (event, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  return (
    <>
      <Box
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
          background: 'rgb(255, 246, 241)',
        }}
      >
        <h1>
          Fotos Antiguas de Choachí
        </h1>
        <p>Esta es una colección de Fotos antiguas e
          históricas de Choachí(Cundinamarca). Bienvenidos a este viaje en el tiempo a
          los años 1930 con Horst Martin. Derechos reservados: Staatliche
          Kunstsammlungen Dresden, Museum für Völkerkunde Dresden / Martin,
          Horst. License: Free access - rights reserved.</p>
        <Container>
          <ProductListToolbar />

          <Box sx={{ pt: 2 }}>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
            <Grid container spacing={3}>
              {_DATA.currentData().map((photo) => {
                return (
                  <Grid item key={photo.id} lg={4} md={6} xs={12}>
                    <ProductCard photo={photo} />
                  </Grid>
                );
              })}
            </Grid>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifycontent: 'center',
              pt: 5,
            }}
          >
            <Stack spacing={2}>
              <Typography>Page: {page}</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PhotosChoachi;
