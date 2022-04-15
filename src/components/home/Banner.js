import { useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Banner = () => {
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setDisable(true);
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 10, mb: 15 }}>
      <Grid item xs={10} sm={10} md={4} lg={4} xl={4} sx={{ mb: 10 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, justifyContent:'center' }}>
          Fractionalized Real Estate Investing For Everyone
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontSize: '18px', mt: 4 }}
        >
          Buy & own single family homes easily and securely
        </Typography>
        <Typography variant="subtitle1" component="div">
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; Each house is owned as a NFT
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; Managed by DAO LLC
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; Early adopters receive significant
            Bonfire governance tokens
          </Typography>
        </Typography>
      </Grid>
      <Grid xs={10} sm={10} md={4} item lg={4} xl={3} sx={{ mb: 10 }}>
        <Card
          sx={{
            border: 'none',
            borderRadius: 2,
            backgroundColor: '#fff',
            py: 5,
          }}
        >
          <img
            style={{
              width: '20%',
              marginLeft: '40%',
              marginTop: '-35rem',
              display: 'none',
            }}
            src="android-chrome-192x192.png"
            alt="Logo"
            role="img"
            className="rounded object-cover h-full w-full"
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 600, textAlign: 'center', mt: 3 }}
          >
            Join our community
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'center', mt: 1 }}
          >
            And get updates as we get closer to launch
          </Typography>

          <Typography sx={{ textAlign: 'center', mt: 2 }}>
            <input
              placeholder="Enter Your Email"
              className="input"
              value={email}
              onChange={handleEmail}
            />
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href={
                email
                  ? 'https://homes.us14.list-manage.com/subscribe/post?u=ed1187605312b15b300466b6d&amp;id=617d91117e'
                  : null
              }
            >
              <button>Subscribe</button>
            </a>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Banner;
