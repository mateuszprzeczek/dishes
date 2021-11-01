import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import Pizza from './dish-types/Pizza';
import renderField from '../renderField';
import validate from '../validate';




let DishesForm = props => {
    const { handleSubmit,
        dishType,
        pristine, reset, submitting
       } = props;

       if(dishType) {
         console.log(dishType)
       }



    return <form onSubmit={handleSubmit}>
        <div>
        <div>
          <Field name="name" component={renderField} type="text" label="Name"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="preparation_time" component={renderField} type="time" step="2" defaultValue="00:00:00" label="Preparation time"/>
        </div>
      </div>
      <div>
        <label>Dish type</label>
        <div>
          <Field name="type" component="select">
            <option></option>
            <option name="pizza" value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwith">sandwith</option>
          </Field>
        </div>
        {(dishType === 'pizza') &&
               <Pizza />
               }
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
      </form>
  }
  
  DishesForm = reduxForm({    
    form: 'dishesForm',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate
  })(DishesForm)

const selector = formValueSelector('dishesForm') 
DishesForm = connect(state => {
  const dishType = selector(state, 'type');
  
  return {
    dishType,
  }
})(DishesForm);


export default DishesForm;