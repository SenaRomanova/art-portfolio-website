import Button from '@mui/material/Button';

export default function GeneralButton({content}) {
  return (
  <Button disableRipple variant='text' color='white' sx= {
    {display: 'inline-flex', 
    fontSize: '1.5em', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    padding: 1, 
    textTransform: 'none', 
    '&:hover': 
    {color: '#cb0000ff'}}
    }>

    {content}

  </Button>);
}