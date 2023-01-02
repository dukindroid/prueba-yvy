import Button from '@mui/material/Button';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@mui/material/styles';


const MySpecialButton = (props) => {
  // const [buttonValue, setbuttonValue] = useState(false);
  // props.value = useRef(false);
  const handleClick = (event) => {
    props.onClick(event)
    // props.onChange(event.target.value)
  }
  const ButtonGray = (props)=> {
    return (
    <ThemeWrapper>

    <Button value={props.value} id={null} onClick={handleClick} sx={{backgroundColor:'#E7EAEE', color:'#ccc'}} size='small'>
      {props.text}
    </Button>
    </ThemeWrapper>
    )
  }
  const ButtonNO = () => {
    return (
      <ThemeWrapper>

      <Button value={props.value} id={false} onClick={handleClick} sx={{backgroundColor:'#047857', color:'#fff'}} size='small'>
        SI
      </Button>
      </ThemeWrapper>
      )
    
  }
  const ButtonYES = () => {
    return (
      <ThemeWrapper>
        <Button value={props.value} id={true} onClick={handleClick} sx={{backgroundColor:'#A51816', color:'#fff'}} size='small'>
          NO
        </Button>
      </ThemeWrapper>
        )
  }

  const ThemeWrapper = ({children}) => {
    return (
      <ThemeProvider theme={MyTheme}>
        {children}
      </ThemeProvider>
    )
  } 

  if (props.value !== null) {
    if (props.type === 'true') return (<ButtonYES />) 
    if (props.type === 'false') return (<ButtonNO />) 
  }
  return (<ButtonGray text={props.text} />)
}
    


export default MySpecialButton