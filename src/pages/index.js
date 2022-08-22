// import Head from "next/head";
import { Box, Container, Grid } from '@mui/material';
// import { Budget } from '../components/dashboard/budget';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Button,
} from '@mui/material';
import profileImg from '../data/nata_photo.jpg';

const Dashboard = () => (
  <>
    <Box
      // position="fixed"
      sx={{
        width: { sm: `calc(100% - ${30}px)` },
        ml: { sm: `${30}px` },
        background: 'rgb(255, 246, 241)',
      }}
    >
      <Container maxWidth="md">
        <Grid item spacing={2}>
          <Grid item xs={2}>
            {/* <TotalProfit sx={{ height: "100%" }} /> */}
            <Grid item lg={3} sm={3} xl={3} xs={6}>
              {/* <Budget /> */}
              {/* <Budget /> */}
            </Grid>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Grid>
          <Grid xl={3} lg={3} sm={6} xs={12}>
            {/* <TotalCustomers /> */}
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            {/* <TasksProgress sx={{ height: '20%' }} /> */}
          </Grid>

          <Grid display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia component="img" height="200" image={profileImg} />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Natalia Garcia
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    My name is Natalia Garcia, I love Web programming. I work
                    with React js, MUI, Javascript, HTML5 and CSS. I studied a
                    Master in Hydo Science and Engineering at the University of
                    Dresden, where I was able to do my thesis based on
                    programming in R. I leave you this wonderful catalog
                    belonging to the State Art Collections of Dresden, Museum of
                    Ethnology of Dresden, where you can find the photographs of
                    Martin, Horst, who had the opportunity to live and travel
                    through Colombia and other countries in Latin America.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mi nombre es Natalia García, me encanta la programación Web.
                    Manejo React js, MUI, Javascript, HTML5 y CSS. Estudié una
                    Maestría en Hidociencias e Ingeniería en la Universidad de
                    Dresde, donde pude hacer mi tesis basada en programación en
                    R. Les dejo esta maravilloso catalogo perteneciente
                    Colecciones estatales de arte de Dresde y Museo de Etnología
                    de Dresde, donde se encuentran las fotografías de Martin,
                    Horst, quien tuvo la oportunidad de vivir y viajar por
                    Colombia y otros paises de latinoamérica.
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
                <Grid
                  container
                  className="grid"
                  sx={{
                    // flexGrow: 1,
                    background: '#001a5b',
                  }}
                >
                  <Grid item xs={50}>
                    <Grid container justifyContent="center">
                      <Link href={'https://github.com/natagr23'}>
                        <GitHubIcon />
                      </Link>
                      <Link
                        href={'https://www.linkedin.com/in/nataliagarciarosas/'}
                      >
                        <LinkedInIcon />
                      </Link>
                      <Link
                        href={
                          'mailto:nata_garcia23@hotmail.com?body=My custom mail body'
                        }
                      >
                        <EmailIcon />
                      </Link>
                      <Link href={'https://garcia-dev.es/'}>
                        <WebIcon />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <LatestProducts sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
