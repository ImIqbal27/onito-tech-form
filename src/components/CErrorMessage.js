import React from 'react';
import {  ErrorMessage } from 'formik';
import { toast } from 'react-toastify';

const CErrorMessage = ({name}) => {
    return (
       <small style={{color:"red"}}> <ErrorMessage  name = {name} /> </small>
    );
};

export default CErrorMessage;