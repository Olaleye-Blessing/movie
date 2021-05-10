import { useState } from "react";

const useSignUpForm = (validate) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });

    // const [errors, setErrors] = useState({});
    const [errors, setErrors] = useState({
        firstName: { msg: "", status: true },
        lastName: { msg: "", status: true },
        email: { msg: "", status: true },
        userName: { msg: "", status: true },
        password: { msg: "", status: true },
        confirmPassword: { msg: "", status: true },
    });
    const handleChange = (e) => {
        let { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        // console.log({ ...values });
        // console.log({ value });
        // console.log("handling change");
        setErrors({
            ...errors,
            ...validate(name, value, values),
        });
    };

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        userName: false,
        password: false,
        confirmPassword: false,
    });

    const handleKeyDown = (name) => {
        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors(validate(values));
        console.log("submited");
    };

    return {
        handleChange,
        values,
        errors,
        handleSubmit,
        touched,
        handleKeyDown,
    };
};

export default useSignUpForm;
