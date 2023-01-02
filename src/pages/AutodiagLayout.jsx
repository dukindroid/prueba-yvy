import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import YviLogo from '../components/YviLogo'
import MySectionContainer from '../components/MySectionContainer'
import GradingIcon from '@mui/icons-material/Grading';
import BiotechIcon from '@mui/icons-material/Biotech';
import Footer from '../components/Footer';
import { Button } from '@mui/material';
import { topics } from "../data/topics";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import MyQuestions from '../components/MyTopics';
// import MySpecialButton from '../components/MySpecialButton'
import MyAccordion from '../components/MyAccordion';

export const MyTopic = ({title,questions}) => {
  return (<>
    <MyAccordion title={title}>
        <Typography>
          {questions}
        </Typography>
    </MyAccordion>
  </>)
}
    // <Typography variant="body2" color="text.secondary" align="center" >
    //   {data[0].title}
    // </Typography>

const MyTopics = () => {
  // const [values, setValues] = useState([]);
  // const handleQuestion = () => {
  // }
  useEffect(() => {

    console.log("Primer Reactivo: " + JSON.stringify(topics[0].title))
    // setValues({
    // })
    // Array(props.data.lenght)
  }, [])
  
  return (<>
    <MyTopic title={topics[0].title} questions={topics[0].reactives}/>
  </>)
    // {
    //   data.map((el,index) => 
    //   <MyQuestion key={index} id={index} onChange={handleQuestion} value={el} />
    //   )
}


const AutodiagLayout = () => {
  useEffect(() => {
    console.dir({"Questions":topics})
    // return () => {
    // }
  }, [topics])
  
  return (<>
    <NavBar />
    <YviLogo />
    <MySectionContainer icon={<GradingIcon />} title={'Autodiagnóstico de Sostenibilidad'} >
      <MyTopics />
    </MySectionContainer>
    <MySectionContainer icon={<BiotechIcon />} title={'Prueba de componentes'} >
      <Button>Hola!</Button>
    </MySectionContainer>
    <Footer />
  </>)
}

export default AutodiagLayout