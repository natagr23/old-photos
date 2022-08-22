import React, { useState } from 'react';

// import PropTypes from "prop-types";
import {
  IconButton,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
// import { Clock as ClockIcon } from "../../icons/clock";

import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { CardMedia, Modal, Button, Toolbar, AppBar } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 1300,
//   bgcolor: "background.paper",
//   border: "1px solid #6b34a6",
//   boxShadow: 15,
//   p: 4,
// };

export const ProductCard = ({ photo, ...rest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifycontent: 'center',
            pb: 3,
          }}
        >
          <Card
            raised
            sx={{
              maxwidth: 320,
              margin: '0 auto',
              // padding: "0.1em",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={photo.media}
              alt={'alt'}
              // title={"titleasdasdsada"}
              sx={{ padding: '0em 1em 0 1em', objectFit: 'contain' }}
            />
            <IconButton color="secondary" onClick={handleOpen}>
              {' '}
              <OpenInFullIcon />
            </IconButton>
            <Modal
              sx={{ overflowY: 'scroll' }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                display="flex"
                justifycontent="center"
                alignItems="center"
                minheight="30vh"
                // sx={style}
              >
                <Toolbar>
                  <CardMedia
                    component="img"
                    height="800"
                    image={photo.media}
                    title={photo.title}
                  />
                </Toolbar>

                <IconButton color="secondary" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Modal>
          </Card>

          {/* <Avatar src={photo.media} /> */}
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="body2"
        >
          {photo.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {photo.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <CopyrightIcon />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Staatliche Kunstsammlungen Dresden, Museum für Völkerkunde Dresden
              / Martin, Horst. License: Free access - rights reserved.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {/* <DownloadIcon /> */}
            {/* <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {photo.totalDownloads} Downloads
          </Typography> */}
            <LinkIcon />
            <Link color="#6b34a6" href={photo.metadata} variant="body2">
              Source Link
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
