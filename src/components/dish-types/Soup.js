import React from "react";
import { Field } from "redux-form";
import renderField from "../../renderField";

let Soup = () => {
    return (
        <div>
            <Field
                className="slider"
                name="spiciness_scale"
                id="spiciness_scale"
                component={renderField}
                type="range"
                min="1"
                max="10"
                value=""
                defaultValue="-1"
                label="spiciness scale 1-10"
            />
        </div>
    );
};

export default Soup;
