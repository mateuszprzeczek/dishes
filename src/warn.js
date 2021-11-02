const warn = values => {
    const errors = {}
    if (values.spiciness_scale > 8) {
      errors.spiciness_scale = 'Very spicy, order at your own risk'
    }
  
    return errors
  }
  
  export default warn