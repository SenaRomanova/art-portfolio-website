import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function GeneralButton({buttonName, to, fontSize, paddingLeft}) {
  return (
  <Button 
    disableRipple 
    variant='text' 
    component={to ? Link : 'button'} //if to prop is provided, component is Link, otherwise use button
    to={to} //if to prop is provided, set the to attribute
    sx= {
      {display: 'inline-flex', 
      fontSize: {fontSize}, 
      color: '#858585ff',
      alignItems: 'center', 
      justifyContent: 'left', 
      width: '100%', 
      paddingLeft: {paddingLeft} || '4vw', 
      textTransform: 'none', 
      '&:hover': 
      {color: '#cb0000ff'}}
      }>

    {buttonName}

  </Button>);
}