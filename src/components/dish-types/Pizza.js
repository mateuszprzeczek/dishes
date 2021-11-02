import React from "react";
import { Field } from "redux-form";
import renderField from "../../renderField";

let Pizza = () => {
    return (
        <>
            <Field
                name="no_of_slices"
                component={renderField}
                type="number"
                min="1"
                placeholder="No of slicess"
                label="Number of slices"
            />
            <Field
                name="diameter"
                component={renderField}
                type="number"
                step="0.1"
                min="23.0"
                max="50.0"
                placeholder="diameter"
                label="Diameter"
            />
        </>
    );
};

export default Pizza;
