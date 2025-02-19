import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, description, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem'}}>
               {description ? (
                  <a href={description} target="_blank" rel="noopener noreferrer">
                     {title}
                  </a>
               ) : (
                  title
               )}
            </h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               <IconLink link={live} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
               <IconLink link={source} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;