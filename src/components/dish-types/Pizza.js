import React from "react";
import { Field } from 'redux-form';
import renderField from '../../renderField';

let Pizza = () => {
    return (
        <>
                <label>Number of slicess? </label>
                 <div>
                   <Field
                     name="no_of_slices"
                     component={renderField}
                     type="number"
                     min="1"
                     placeholder="No of slicess"
                   />
                 </div>
                 <label>Diameter </label>
                 <div>
                   <Field
                     name="diameter"
                     component={renderField}
                     type="number"
                     step="0.1"
                     min="23.0"
                     placeholder="diameter"
                   />
                 </div>
            </>
    )
}


export default Pizza;