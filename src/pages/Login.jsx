import React, { useState } from "react";
// import FormButton from "../Components/Form/FormButton";
import HomeLogoLink from "../Components/HomeLogoLink";
import FormInput from "./../Components/Form/FormInput";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { validateEmail } from "../utility/validateEmail";
import FormBtn from "../Components/Form/FormBtn";

// let initialValues = {
//     pswdType: "",
//     email: "",
//     password: "",
//     errors: {
//         email: true,
//         password: true,
//     },
//     touched: {
//         email: false,
//         password: false,
//     },
//     isEnabled: false,
// };

const Login = () => {
    const [pswdType, setPswdType] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isTouched, setIsTouched] = useState({
    //     email: false,
    //     password: false,
    // });
    const [errors, setErrors] = useState({
        email: true,
        password: true,
    });
    // const [isEnabled, setIsEnabled] = useState(false);

    const togglePswdType = () => {
        setPswdType(pswdType === "password" ? "text" : "password");
    };

    const validate = (name) => {
        let currentErrors = { ...errors };
        if (name === "email") {
            currentErrors.email = validateEmail(email);
        }
        setErrors(currentErrors);
    };

    let disabled = errors.email && errors.password;
    // console.log(Object.keys(errors));

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
                        value={email}
                        handleChange={(e) => {
                            setEmail(e.target.value);
                            validate("email");
                        }}
                        required={true}
                    />
                    <FormInput
                        label="pasword"
                        name="password"
                        type={pswdType}
                        value={password}
                        handleChange={(e) => {
                            setPassword(e.target.value);
                        }}
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
                    {/* <FormButton text="login" disabled={disabled} /> */}
                    <div className="form__control form__button-container">
                        <FormBtn
                            type="submit"
                            disabled={disabled}
                            next={true}
                            text="login"
                        />
                    </div>
                </form>
            </main>
        </>
    );
};

export default Login;
