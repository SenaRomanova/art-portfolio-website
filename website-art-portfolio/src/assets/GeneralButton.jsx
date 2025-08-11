import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export default function GeneralButton({buttonName, to, onSelect, footer}) {
  const theme = useTheme();

  const handleClick = () => {
    if (onSelect) { onSelect()} ;
  };


  return (
  <Button 
    onClick={handleClick}
    disableRipple 
    variant='text' 
    color='white'
    component={to ? Link : 'button'} //if to prop is provided, component is Link, otherwise use button
    to={to} //if to prop is provided, set the to attribute
    sx= {
      {
      ...theme.typography.button,
      display: 'flex',
      color: '#858585ff',
      alignItems: 'center', 
      justifyContent: 'center', 
      textTransform: 'none', 
      '&:hover': 
      {color: '#cb0000ff'}}
      }>

    {buttonName}

  </Button>);
}