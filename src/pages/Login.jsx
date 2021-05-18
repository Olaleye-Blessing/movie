import React, { useEffect, useState } from "react";
// import FormButton from "../Components/Form/FormButton";
import HomeLogoLink from "../Components/HomeLogoLink";
import FormInput from "./../Components/Form/FormInput";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { validateEmail } from "../utility/validateEmail";
import FormBtn from "../Components/Form/FormBtn";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const [pswdType, setPswdType] = useState("password");
    const [values, setValues] = useState({
        "email": "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: true,
        password: true,
    });

    let history = useHistory();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const togglePswdType = () => {
        setPswdType(pswdType === "password" ? "text" : "password");
    };

    const validate = (name) => {
        let currentErrors = { ...errors };

        if (name === "email") {
            currentErrors.email = !validateEmail(values.email);
        }

        if (name === "password") {
            currentErrors.password = values.password.length < 1;
        }

        setErrors(currentErrors);
    };

    useEffect(() => {
        validate("email");
        validate("password");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.password, values.email]);

    let disabled = Object.keys(errors).some((err) => errors[err] === true);
    // console.log({ disabled });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
        alert("submitted");
        setValues({ ...values, "email": "", password: "" });
        history.replace("/");
    };

    return (
        <>
            <header className="login">
                <h1 className="width">
                    <HomeLogoLink />
                </h1>
            </header>
            <main className="width">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <FormInput
                        label="email"
                        name="email"
                        type="email"
                        placeholder="shade@gmail.com"
                        value={values.email}
                        handleChange={handleChange}
                        required={true}
                        handleKeyDown={() => {
                            validate("email");
                        }}
                    />
                    <FormInput
                        label="password"
                        name="password"
                        type={pswdType}
                        value={values.password}
                        handleChange={handleChange}
                        handleKeyDown={() => validate("password")}
                    >
                        <button
                            type="button"
                            onClick={togglePswdType}
                            className="form__icon"
                        >
                            {pswdType === "password" ? (
                                <BsEyeFill />
                            ) : (
                                <BsEyeSlashFill />
                            )}
                        </button>
                    </FormInput>
                    <div className="form__control form__button-container">
                        <FormBtn
                            className={disabled ? "" : "submit"}
                            type="submit"
                            disabled={disabled}
                            next={false}
                            text="login"
                        />
                    </div>
                </form>
                <p className="form__other">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
                <p className="form__other" style={{ marginTop: "5px" }}>
                    <Link to="/forgotpassword">Forgot password?</Link>
                </p>
            </main>
        </>
    );
};

export default Login;
