const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.preparation_time) {
    errors.preparation_time = 'Required'
  }
  if (!values.no_of_slices) {
    errors.no_of_slices = 'Required'
  } else if (isNaN(Number(values.no_of_slices))) {
    errors.no_of_slices = 'Must be a number'
  } else if (Number(values.no_of_slices) < 4) {
    errors.no_of_slices = 'Sorry, you must order at least 4 piecess'
  }
  return errors
}



  export default validate;