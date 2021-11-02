import React from "react";
import { Field } from "redux-form";
import renderField from "../../renderField";
import sandwichImg from "../../img/sandwich.jpg"

let Sandwich = () => {
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
            <img src={sandwichImg} alt='sandwich' style={{width: '200px'}}/>
        </div>
    );
};

export default Sandwich;
