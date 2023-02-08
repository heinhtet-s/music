import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import classes from './Music.module.css'
import swal from 'sweetalert';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px"
};
const btnStlyle={
    backgroundColor: '#eb0909',
    borderRadius: '28px',
    transition: '1s',
    border: '1px solid rgb(237, 17, 17)',
    display: 'inline-block',
    cursor: 'pointer',
    color: '#ffffff',
    marginTop: '10px',
    fontFamily: 'Arial',
    fontSize: '15px',
    padding: '5px 40px',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #2f6627',
    marginBottom:'10px'
}

function BuyModal({codes}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [codeNo,setCodeNo] = useState('');
    const submitHandler =(e)=>{
      let success=false;
        e.preventDefault();
        codes.forEach(el=>{
            if(el==codeNo){
                success=true
               swal('success')
            }
        })
        if(!success){
          swal('Error')
        }
      
    }
  return (
    <div>
      <Button onClick={handleOpen} style={btnStlyle}>Buy</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
         <input type="text" placeholder="Enter Code" onChange={(e)=>{setCodeNo(e.target.value)}} className={classes.buyInput} ></input> <br></br>
         <button className={classes.buyBtn} onClick={submitHandler}>Submit</button>
         <div className={classes.contact}>
            <a href="https://www.facebook.com/profile.php?id=100087630447354&mibextid=ZbWKwL" target="_blank" style={{    marginLeft: "auto", 
           display: "block",}}>
            Contact my account
          </a>
       
         </div>
   
        </Box>
      </Modal>
    </div>
  )
}

export default BuyModal