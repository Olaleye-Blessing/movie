import { useState } from "react";
import { useHistory } from "react-router";

const useSignUpForm = (validate) => {
    let history = useHistory();
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        country: "",
    });

    // const [errors, setErrors] = useState({});
    const [errors, setErrors] = useState({
        firstName: { msg: "", status: true },
        lastName: { msg: "", status: true },
        email: { msg: "", status: true },
        country: { msg: "", status: true },
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
        country: false,
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
        alert("submited");
        setValues({
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            country: "",
        });
        history.replace("/");
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
