import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyAccordionElement = (props) => {
  return (<>
    <Accordion sx={{bgcolor:'#66CB9430'}}>
      <AccordionSummary
          sx={{bgcolor:'#66CB9430' , border: '1px solid #66CB94', borderRadius:'5px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${props.id}a-header`}
          id={`panel${props.id}a-header`}
        >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor:'#fff'}}>
          {props.children}
      </AccordionDetails>
      </Accordion>
  </>)
}

export default MyAccordionElement