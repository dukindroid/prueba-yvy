import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';

const MySpecialButton = (props) => {
  // const [buttonValue, setbuttonValue] = useState(false);
  // props.value = useRef(false);
  const handleClick = (event) => {
    props.onChange(event.target.value)
  }
  const ButtonGray = (props)=> {
    return (<Button value={props.value} id={null} onClick={handleClick} sx={{backgroundColor:'#E7EAEE', color:'#ccc'}} size='small'>{props.text}</Button>)
  }
  const ButtonNO = () => {
    return (<Button value={props.value} id={false} onClick={handleClick} sx={{backgroundColor:'#047857', color:'#fff'}} size='small'>SI</Button>)
    
  }
  const ButtonYES = () => {
    return (<Button value={props.value} id={true} onClick={handleClick} sx={{backgroundColor:'#A51816', color:'#fff'}} size='small'>NO</Button>)
  }
  if (props.value) {
    if (props.type === 'YES') return (<ButtonYES />) 
    if (props.type === 'NO') return (<ButtonNO />) 
  }
  return (<ButtonGray text={props.text} />)
}

export default MySpecialButton