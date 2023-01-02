import React, { useEffect, useState } from 'react'
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
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';// import MyQuestions from '../components/MyTopics';
import MySpecialButton from '../components/MySpecialButton'
// import MyAccordion from '../components/MyAccordion';
{/* <MySpecialButton onClick={setValue({button1:true})} type="YES" value={value.button1}></MySpecialButton> */}

const Question = ({id, text, handler, value}) => {  
  const handleClick = (e) => {
    handler(e)
  }
  useEffect(() => {
    // console.log(`Reactivo ${id+1} -> ${text}`)
  })
  return (<>
  <Grid container id={id} spacing={2} padding={'5px'}>
    <Grid item xs={10} >
      <Typography variant="body2" color="text.secondary" align="left" >
        {text}
      </Typography>
    </Grid>
    <Grid item xs={1} >
      <MySpecialButton id={id} type={false} value={value} onClick={handleClick} />
    </Grid>
    <Grid item xs={1} >
      <MySpecialButton id={id} type={true} value={value} onClick={handleClick} />
    </Grid>
  </Grid>
  <Divider sx={{padding:'5px'}}/>
  </>)  
}

const MyTopic = ({id, title, children}) => {
  return (<>
    <Accordion sx={{bgcolor:'#66CB9430', border: '1px solid #66CB94', borderRadius:'5px'}}>
      <AccordionSummary
        sx={{bgcolor:'#66CB9430'}}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}a-header`}
        id={`panel${id}a-header`}
      >
      <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor:'#fff'}}>
        {children}
      </AccordionDetails>
    </Accordion>
  </>)
}

const MyTopics = ({id, topic}) => {
  const [state, setState] = useState(new Array(topic.reactives.length));

  const handleStateChange = (index, value) => {
    // console.log(index + ": " + value)
    const nextState = state
    nextState[index] = (nextState[index] === null) ? value : null
    setState(nextState)
    console.log(JSON.stringify(state))
  }

  const handleChild = (e) => {
    handleStateChange(e.target.id, e.target.value)
  }
  
  useEffect(() => {
    console.log(JSON.stringify(state))
    // console.log(`Topico ${id+1} -> ${JSON.stringify(topic.title)}`)
    // console.log(`State: -> ${JSON.stringify(topic.reactives.length)}`)
  })
  
  return (
    <MyTopic id={id} title={topic.title} >
    {
      // Cada tópico tiene una serie de reactivos:
      topic.reactives.map((el, index)=> {
        // setValues([
        //   ...values,
        //   { id: index, value: null }
        // ]);
        return <Question id={index} key={index} text={el.question} handler={handleChild} value={state[id]} /> 
      })
    }
    </MyTopic>
  
  )
}

const Layout = () => {
  return (<>
    <NavBar />
    <YviLogo />
    <MySectionContainer icon={<GradingIcon />} title={'Autodiagnóstico de Sostenibilidad'} >
      <Stack spacing={1}>
      {
        // Desglosamos cada tópico
        topics.map((el,index) => {
          // const initialState = new Array(el.reactives.length)
          return <MyTopics id={index} key={index} topic={el}  />
        })
      }
      </Stack>
    </MySectionContainer>
    <MySectionContainer icon={<BiotechIcon />} title={'Prueba de componentes'} >
      <Button>Hola!</Button>
    </MySectionContainer>
    <Footer />
  </>)
}

export default Layout
// <MyAccordion title={title}>
//         {questions}
// </MyAccordion>
// <Typography variant="body2" color="text.secondary" align="center" >
//   {data[0].title}
// </Typography>
// const [values, setValues] = useState([]);
// const handleQuestion = () => {
  // }
// setValues({
// })
// Array(props.data.lenght)
// {
  //   data.map((el,index) => 
  //   <MyQuestion key={index} id={index} onChange={handleQuestion} value={el} />
  //   )
  // return () => {
// }