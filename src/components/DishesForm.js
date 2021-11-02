import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import Pizza from './dish-types/Pizza';
import Soup from './dish-types/Soup';
import Sandwith from './dish-types/Sandwith';
import renderField from '../renderField';
import validate from '../validate';


let DishesForm = props => {
    const { handleSubmit,
        dishType,
        pristine, submitting
       } = props;

    return <form onSubmit={handleSubmit}>
        
        <div>
          <Field 
          name="name" 
          component={renderField} 
          type="text" 
          label="Name"/>
        </div>
    
     
        <div>
          <Field 
          name="preparation_time" 
          component={renderField} 
          type="time" 
          step="1" 
          defaultValue="00:00:00" 
          label="Preparation time"/>
        </div>
      
      <div>
        <label>Dish type</label>
        <div>
          <Field 
          name="type" 
          component="select">
            <option>Select dish type</option>
            <option name="pizza" value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwith">sandwith</option>
          </Field>
        </div>
        {(dishType === 'pizza') && <Pizza />}
        {(dishType === 'soup') && <Soup />}
        {(dishType === 'sandwith') && <Sandwith />}
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
      </form>
  }
  
  DishesForm = reduxForm({    
    form: 'dishesForm',
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