import React from "react";
import { Field } from 'redux-form';
import renderField from '../../renderField';

let Sandwith = () => {
    return (
                <div>
                    <Field
                        name="slices_of_bread"
                        id="slices_of_bread"
                        component={renderField}
                        type="number"
                        min="1"
                        max="10"
                        label="slices of bread 1-10"
                        />
                        </div>
    )
}


export default Sandwith;