import * as React from 'react';
import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import MyAccordionElement from './MyAccordionElement';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function MyAccordion(props) {
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
// return (
//     <MyAccordionElement sx={{bgcolor:'#66CB94', border: '2px solid #000'}} key={props.index} id={props.index} title={props.title}>
//       <MyQuestions title={'Indicadores Mímimos'} questions={props.IMinimos}></MyQuestions>                  
//       <MyQuestions title={'Indicadores Deseables'} questions={props.IDeseables}></MyQuestions>                  
//     </MyAccordionElement>
// );