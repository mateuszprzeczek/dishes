const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const URL = "https://frosty-wood-6558.getsandbox.com:443/dishes";

export default (async function showResults(values) {
    await sleep(500);
    let result = {};
    if (values.type === "pizza") {
        result = {
            name: values.name,
            preparation_time: values.preparation_time,
            type: values.type,
            no_of_slices: parseInt(values.no_of_slices),
            diameter: parseInt(values.diameter),
        };
    } else if (values.type === "soup") {
        result = {
            name: values.name,
            preparation_time: values.preparation_time,
            type: values.type,
            spiciness_scale: parseInt(values.spiciness_scale),
        };
    } else if (values.type === "sandwich") {
        result = {
            name: values.name,
            preparation_time: values.preparation_time,
            type: values.type,
            slices_of_bread: parseInt(values.slices_of_bread),
        };
    }
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(result, null, 2),
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await fetch(URL, requestOptions, { mode: "cors" });
        const data = await res.json();
        console.log("data: ", data);
    } catch (error) {
        window.alert(error);
    }
    window.alert(`You submitted:\n\n${JSON.stringify(result, null, 2)}`);
});
