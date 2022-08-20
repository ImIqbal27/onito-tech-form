import React from 'react';
import {  ErrorMessage } from 'formik';

const CErrorMessage = ({name}) => {
    return (
       <ErrorMessage  name = {name} />
    );
};

export default CErrorMessage;