const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Required";
    } else if (values.name.length > 15) {
        errors.username = "Must be 15 characters or less";
    }
    if (!values.preparation_time) {
        errors.preparation_time = "Required";
    } else if (values.preparation_time === "00:00:00") {
        errors.preparation_time = "Choose preparation time";
    } else if (
        parseInt(values.preparation_time.slice(3)) < 10 &&
        parseInt(values.preparation_time.slice(1)) === 0
    ) {
        errors.preparation_time = "Preparation time can't be under 10 minutes";
    }
    if (!values.no_of_slices) {
        errors.no_of_slices = "Required";
    } else if (isNaN(Number(values.no_of_slices))) {
        errors.no_of_slices = "Must be a number";
    } else if (Number(values.no_of_slices) < 4) {
        errors.no_of_slices = "Sorry, you must order at least 4 piecess";
    }
    if (!values.diameter) {
        errors.diameter = "Required";
    } else if (values.diameter.max > 50.0) {
        errors.diameter = "Sorry, 50 is max value";
    }
    if (!values.slices_of_bread) {
        errors.slices_of_bread = "Required";
    } else if (values.slices_of_bread.max > 10) {
        errors.slices_of_bread = "Sorry, 10 is max value";
    }
    if (!values.spiciness_scale) {
        errors.spiciness_scale = "Choose spiciness scale 1-10";
    }

    return errors;
};

export default validate;
