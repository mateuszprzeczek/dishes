import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector, reset } from "redux-form";
import Pizza from "../dish-types/Pizza";
import Soup from "../dish-types/Soup";
import Sandwich from "../dish-types/Sandwich";
import renderDropDownField from "../DropDown/renderDropDownField";
import renderField from "../../renderField";
import validate from "../../validate";
import warn from "../../warn";
import styles from './DishesForm.module.css';

let DishesForm = (props) => {
    const { handleSubmit, dishType, submitting, valid } = props;

    const categories = [
        {
            value: 'none',
            name: 'Dish Type', 
        },
        {
            value: 'pizza',
            name: 'pizza',
        },
        {
            value: 'soup',
            name: 'soup',
        },
        {
            value: 'sandwich',
            name: 'sandwich',
        },
    ];

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <Field
                    name="name"
                    component={renderField}
                    type="text"
                    label="Name"
                />
            </div>
            <div>
                <Field
                    name="preparation_time"
                    component={renderField}
                    type="time"
                    step="1"
                    defaultValue="00:00:00"
                    label="Preparation time"
                />
            </div>

                <label>Dish type</label>
                    <Field name="type" options={categories} component={renderDropDownField} />
                <div>
                {dishType === "pizza" && <Pizza />}
                {dishType === "soup" && <Soup />}
                {dishType === "sandwich" && <Sandwich />}
            </div>
            <div>
                <button 
                disabled={!valid} 
                className={submitting ? `${styles.button} ${styles.success} ${styles.animate}` 
                : `${styles.button} ${styles.success}`} 
                type="submit" >
                    Submit
                </button>
            </div>
        </form>
    );
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dishesForm'));
}

DishesForm = reduxForm({
    form: "dishesForm",
    onSubmitSuccess: afterSubmit,
    validate,
    warn,
})(DishesForm);

const selector = formValueSelector("dishesForm");
DishesForm = connect((state) => {
    const dishType = selector(state, "type");
    return {
        dishType,
    };
})(DishesForm);

export default DishesForm;
