import React, { useRef, useState } from "react";
// import FormButton from "../Components/Form/FormButton";
import HomeLogoLink from "../Components/HomeLogoLink";
import FormInput from "./../Components/Form/FormInput";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { validateEmail } from "../utility/validateEmail";
import FormBtn from "../Components/Form/FormBtn";
import { Link } from "react-router-dom";

const Login = () => {
    const [pswdType, setPswdType] = useState("password");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [values, setValues] = useState({
        "email": "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: true,
        password: true,
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const togglePswdType = () => {
        setPswdType(pswdType === "password" ? "text" : "password");
    };

    const validate = (name) => {
        let currentErrors = { ...errors };
        // console.log(currentErrors);

        if (name === "email") {
            currentErrors.email = validateEmail(values.email);
        }

        if (name === "password") {
            // console.log(values.password);
            currentErrors.password = values.password.length < 1;
        }

        console.log(currentErrors);
        setErrors(currentErrors);
    };

    let disabled = Object.keys(errors).some((err) => errors[err] === true);
    console.log({ disabled });

    return (
        <>
            <header className="login">
                <h1 className="width">
                    <HomeLogoLink />
                </h1>
            </header>
            <main className="width">
                <form className="form">
                    <h2>Sign In</h2>
                    <FormInput
                        label="email"
                        name="email"
                        type="email"
                        placeholder="shade@gmail.com"
                        value={values.email}
                        handleChange={handleChange}
                        required={true}
                        handleKeyDown={() => validate("email")}
                    />
                    <FormInput
                        label="pasword"
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
                    Don't have an account? <Link to="/signup">signup</Link>
                </p>
                <p className="form__other" style={{ marginTop: "5px" }}>
                    <Link to="/resetpassword">Forgot password?</Link>
                </p>
            </main>
        </>
    );
};

export default Login;
