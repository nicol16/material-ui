import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import '../App.css';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {AccessTime} from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    components:{
        MuiTypography: {
            variants: [
                {
                    props: {
                        variants: "body2",
                    },
                    style:{
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variants: "body3",
                    },
                    style:{
                        fontSize: 9,
                    },
                },

            ],
        },
    },
    });

export default function TourCard({tour}){




    return(

      <Grid item xs={3}>
          <ThemeProvider theme={theme}>
          <Paper elevation={3}>
              <img src={tour.image} alt="" className="img"/>
              <Box paddingX={1}>
                  <Typography variant="subtitle1" component="h2">
                      {tour.name}
              </Typography>
              </Box>
              <Box sx={{
                  display: "flex",
                  alignItems: "center",
              }}>

                  <AccessTime sx={{ width: 12.5 }}/>
                  <Typography variant="body2" component="p" marginLeft={0.5}>{tour.duration} hours</Typography>

              </Box>
              <Box sx={{
                  display: "flex",
                  alignItems: "center",
              }}
              marginTop={3}>

              <Rating name="read-only" value={tour.rating} readOnly precision={0.25} size="small"/>
                  <Typography variant="body2" component="p" marginLeft={0.5}>{tour.rating}</Typography>
                  <Typography variant="body3" component="p" marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
              </Box>

              <Box>
                  <Typography variant="h6" component="h3" marginLeft={0}>From C $147</Typography>
              </Box>

          </Paper>
              </ThemeProvider>
      </Grid>

    );
}
