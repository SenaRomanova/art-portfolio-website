import Button from '@mui/material/Button';

export default function GeneralButton({content}) {
  return <Button 
        sx={{
            background: "#818181ff", 
            height: "4vh", 
            width: "20vh", 
        }} variant="contained">

        {content}
    </Button>;
}