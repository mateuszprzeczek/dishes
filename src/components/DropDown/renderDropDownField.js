import React from 'react';
import styles from './renderDropDown.module.css';
const renderDropDownField = (formValues) => {

    const { input, label, meta, options } = formValues;

    const { touched, error } = meta;

    return (
        <div>
            <label htmlFor={input.name}>{label}</label>
            <select className={styles.select} {...input}>
                {
                    options.map((option) =>  <option key={option.name} value={option.value}>{option.name}</option>)
                }
            </select>
            {(touched && error) ? <div style={{color: 'red'}}>{error}</div> : ''}
        </div>
    );
}

export default renderDropDownField;