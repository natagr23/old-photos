import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  Stack,
} from '@mui/material';
import { photosBogota } from '../data/photosColombia';
import { ProductListToolbar } from '../components/photo/photo-list-toolbar';
import { ProductCard } from '../components/photo/photo-card';
// import { DashboardLayout } from "../components/dashboard-layout";
import usePagination from './pagination';

const PhotosCol = (props) => {
  let [page, setPage] = useState(1);

  const PER_PAGE = 9;

  const count = Math.ceil(photosBogota.length / PER_PAGE);
  const _DATA = usePagination(photosBogota, PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
    _DATA.jump(value);
  };

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  return (
    <>
      <Box
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
          background: 'rgb(255, 246, 241)',
        }}
      >
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

export default PhotosCol;
