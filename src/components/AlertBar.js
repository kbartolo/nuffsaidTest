import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { styled } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
const MySnackbar = styled(Snackbar)({
    top:'5px  !important',
    alignItems:'flex-start !important'
});

const AlertBar = props => {
    const { data } = props;
    const [open, setOpen] = useState(false);

    let backgroundColor = '';
    if(data.priority===1){
        backgroundColor = '#F56236';
    }else if(data.priority===2){
        backgroundColor = '#FCE788';
    }else{
        backgroundColor = '#88FCA3';
    }
    
    useEffect(() => {
        if(!isEmpty(data)){
            setOpen(true);
        }
    }, []);

    useEffect(() => {
        if(!isEmpty(data)){
            setOpen(true);
        }
    }, [data]);

    const handleClose = (event, reason) => {
    if (reason === 'close') {
        return;
    }

    setOpen(false);
    };

    return (
        <div>
            <MySnackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose}  style={{ backgroundColor,color:'#000000'}}>
                    {data.message}
                </Alert>
            </MySnackbar>
        </div>
    )
}

export default AlertBar;