import Button from '@mui/material/Button';

export default function GeneralButton({content}) {
  return <Button variant='text' color='white' sx= {{padding: 2, textTransform: 'none'}}>{content}</Button>;
}