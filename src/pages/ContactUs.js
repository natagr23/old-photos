import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Box } from '@mui/material';

import useAnalyticsEventTracker from '../data/RouteChangeTracker';

export const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return (
    <Box justifyContent="center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            <Link
              href={'mailto:nata_garcia23@hotmail.com?body=My custom mail body'}
              onClick={() => gaEventTracker('email')}
            >
              Contact Us
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
