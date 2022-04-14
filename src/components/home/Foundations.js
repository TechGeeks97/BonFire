import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

const useStyles = makeStyles(() => ({
  heading: {
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
}));

const Foundations = () => {
  const classes = useStyles();
  return (
    <>
      <hr style={{height:'1px' , backgroundColor: '#837575', border:'none'}}/>
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{ mt: 10, mb: 5 }}
      >
        <Grid item lg={10} sx={{ mb: 10 }}>
          <Typography
            sx={{
              backgroundColor: '#000',
              px: 2,
              borderRadius: 10,
              color: '#fff',
              width: 'fit-content',
              margin: 'auto',
              mt: 2,
              mb: 4,
            }}
          >
          </Typography>
          <Typography variant="h2" component="h1" className={classes.heading}>
          Web 3.0 for real estate investing
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: 20, width:'80%', marginLeft: '10%', textAlign: 'center', mt: 4 }}
          >
            Bonfire is a platform that will facilitate the decentralized real
            estate transactions in a seamless, permissionless, easy, and liquid
            manner
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Ease
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
          Transforming transactions that used to take 30 days into 30 seconds
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Liquidity
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 18 }}>
          The blockchain never sleeps and can facilitate decentralized transactions 24/7/365
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Quality
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 18 }}>
          Access to top properties<sup>#</sup> in the markets with highest potential<sup>*</sup>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: 14,
          mt: 12,
          mb: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
       <sup>*</sup>AI driven models crunching 1000+ data points to predict annualized
        returns
        </Typography>

        <Typography
        sx={{
          textAlign: 'center',
          fontSize: 14,
          mt: 0,
          mb: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >

        <sup>#</sup> Selection based on neighborhood, schools, parks, and community
      </Typography>
    </>
  );
};

export default Foundations;
