import React from 'react';
import {BottomNavigation, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ImageCollage from "./ImageCollage";
import CustomizedAccordions from "./Accordian";
import Paper from "@mui/material/Paper";
import BasicModal from "./Modal";



export default function Tour(){


    return(

       <Container sx={{width: 900}}>
           <Typography variant="h3" component="h1" marginTop={3}>
               Explore the World in Vegas
           </Typography>
           <Box marginTop={3} sx={{display: "flex"}}>
               <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="imagen"  height={325}/>
               <ImageCollage />
           </Box>

           <Box marginBottom={10}>
               <Typography variant="h6" component="h4" marginTop={3}>
                   Frequently Asked Questions
               </Typography>
               <Typography variant="paragraph" component="p" marginTop={3} marginBottom={2}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ultrices urna.
               Morbi elementum mattis ipsum, ac volutpat ligula. Morbi pretium nibh eget neque consectetur gravida.
               Vivamus tristique pulvinar augue in suscipit. Suspendisse vitae faucibus nisi, at ultricies libero. Sed.
               </Typography>
               <CustomizedAccordions/>
           </Box>
           <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
               {/*<BottomNavigation showLabels value={value} onChange={(event, newValue) =>{*/}
               {/*    setValue(newValue);*/}
               {/*}}>*/}

               {/*    <BottomNavigation label="Recents" icon={<RestoreIcon/>} />*/}
               {/*    <BottomNavigation label="Favorites" icon={<FavoriteIcon/>} />*/}
               {/*    <BottomNavigation label="Archive" icon={<ArchiveIcon/>} />*/}

               {/*</BottomNavigation>*/}
               <BottomNavigation>
                   <BasicModal/>
               </BottomNavigation>
           </Paper>
       </Container>
    );
}
