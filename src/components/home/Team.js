import { Card, Grid, Typography } from '@mui/material';

const data = [
  {
    id: 1,
    name: 'Kumar Ujjwal',
    description: 'Kumar helped Punchh achieve escape velocity.',
    tags: 'Product',
    social: 'LinkedIn',
    image: 'https://dwell.fi/images/kumar.webp',
  },
  {
    id: 2,
    name: 'Matthew Elias',
    description: 'Matthew brings 10+ years of crypto industry experience.',
    tags: 'Legal',
    social: 'Twitter',
    image: 'https://dwell.fi/images/matthew.webp',
  },
  {
    id: 3,
    name: 'Heath Matlock',
    description: 'Heath built and sold one of the earlier crypto startups.',
    tags: 'Enginering',
    social: 'LinkedIn',
    image: 'https://dwell.fi/images/heath.webp',
  },
  {
    id: 4,
    name: 'Massimo Giordano',
    description:
      'engineering experience and lean development practices from Stanford.',
    tags: 'Engineering',
    social: 'LinkedIn',
    image: 'https://dwell.fi/images/massimo.webp',
  },
  {
    id: 5,
    name: 'Murray Newlands',
    description: 'Matthew brings 10+ years of crypto industry experience.',
    tags: 'Marketing',
    social: 'Twitter',
    image: 'https://dwell.fi/images/murray.webp',
  },
  {
    id: 6,
    name: 'Jill Rea',
    description:
      'Jill has scaled organizations of all sizes, achieving operational efficiency and effectiveness for sustainable growth.',
    tags: 'Operations',
    social: 'LinkedIn',
    image: 'https://dwell.fi/images/jill.webp',
  },
];

const Team = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ mt: 10 }}>
        <Grid item lg={10}>
          <Typography
            sx={{
              backgroundColor: '#000',
              px: 2,
              borderRadius: 10,
              color: '#fff',
              width: 'fit-content',
              margin: 'auto',
              mt: 2,
            }}
          >
            The A Team
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, mt: 3, textAlign: 'center' }}
          >
            Core Contributors
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontSize: 20,
              textAlign: 'center',
              mt: 2,
              width: '60%',
              margin: 'auto',
              mb: 10,
            }}
          >
            Meet the incredible people behind the scenes contributing their time
            to build this project.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'} spacing={5}>
        {data.map((item, index) => (
          <Grid item xs={10} sm={10} md={3.5} lg={3.25} key={index}>
            <Card raised sx={{ borderRadius: 5, pb: 3, minHeight: 450 }}>
              <img src={item?.image} alt=" " height={200} width="100%" />
              <Typography sx={{ fontSize: 20, fontWeight: 700, ml: 2, mt: 3 }}>
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  ml: 2,
                  fontWeight: 600,
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 20,
                  width: 'fit-content',
                  px: 1,
                  mt: 1,
                }}
              >
                {item.tags}
              </Typography>
              <Typography sx={{ fontSize: 16, px: 1, mt: 2 }}>
                {item.description}
              </Typography>
              <Typography
                sx={{
                  border: '1px solid #000',
                  borderRadius: 10,
                  px: 1,
                  width: 'fit-content',
                  mt: 1,
                  fontSize: 14,
                  float: 'right',
                  mr: 3,
                }}
              >
                {item.social}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Team;
