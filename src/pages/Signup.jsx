import React, { useState } from "react";
import FormButton from "../Components/Form/FormButton";
import HomeLogoLink from "../Components/HomeLogoLink";
import FormInput from "./../Components/Form/FormInput";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import FormBtn from "../Components/Form/FormBtn";
import useSignUpForm from "../hooks/useSignUpForm";
import validateInfo from "../utility/validateFormInfo";
import DefaultFormInput from "../Components/Form/DefaultFormInput";
import sliceObject from "../utility/sliceObjects";

const SignUp = () => {
    const [stages, setStages] = useState([
        { "pos": 1, name: "personal", "done": false },
        { "pos": 2, name: "account", "done": false },
        { "pos": 3, name: "confirm", "done": false },
    ]);

    const [currentStage, setCurrentStage] = useState(1);

    const handleStageChange = (name, change) => {
        let currentStages = [...stages];
        currentStages = currentStages.map((stage) => {
            let currentStage = { ...stage };
            if (currentStage.name === name) {
                currentStage.done = change === 1 ? true : false;
                return currentStage;
            }
            return stage;
        });
        setStages(currentStages);
    };

    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleKeyDown,
    } = useSignUpForm(validateInfo);

    const fieldError = (field) => {
        const hasError = errors[field].status;
        const shouldShow = touched[field];
        if (!shouldShow) {
            return "";
        }
        return hasError ? "invalid" : "valid";
    };

    // console.log(errors);

    const [passwordType, setPasswordType] = useState({
        password: "password",
        confirmPassword: "password",
    });

    const togglePswdType = (name) => {
        let currenType = { ...passwordType };
        currenType[name] =
            currenType[name] === "password" ? "text" : "password";
        setPasswordType(currenType);
    };

    let stageOne = sliceObject(0, 3, errors);
    let stageTwo = sliceObject(3, 6, errors);

    let disbleStageOne = stageOne
        .map((name) => errors[name])
        .some((obj) => obj.status === true);

    let disbleStageTwo = stageTwo
        .map((name) => errors[name])
        .some((obj) => obj.status === true);
    // console.log(disbleStageTwo);

    let element;

    const displayItem = () => {
        switch (currentStage) {
            case 1:
                element = (
                    <>
                        <FormInput
                            errorClass={fieldError("firstName")}
                            handleKeyDown={() => handleKeyDown("firstName")}
                            handleChange={handleChange}
                            value={values.firstName}
                            label="first name"
                            name="firstName"
                            placeholder="Blessing"
                            required={true}
                        />

                        <FormInput
                            errorClass={fieldError("lastName")}
                            handleKeyDown={() => handleKeyDown("lastName")}
                            value={values.lastName}
                            handleChange={handleChange}
                            label="last name"
                            name="lastName"
                            placeholder="Olaleye"
                            required={true}
                        />
                        <FormInput
                            errorClass={fieldError("email")}
                            handleKeyDown={() => handleKeyDown("email")}
                            value={values.email}
                            handleChange={handleChange}
                            label="email"
                            name="email"
                            placeholder="Olaleye@gmail.com"
                            required={true}
                        />
                        <FormButton
                            type="button"
                            disabled={disbleStageOne}
                            text="next"
                            next={true}
                            handleClick={() => {
                                setCurrentStage(currentStage + 1);
                                handleStageChange("personal", 1);
                            }}
                        />
                    </>
                );
                break;

            case 2:
                element = (
                    <>
                        <FormInput
                            errorClass={fieldError("userName")}
                            handleKeyDown={() => handleKeyDown("userName")}
                            handleChange={handleChange}
                            value={values.userName}
                            label="user name"
                            name="userName"
                            placeholder="Bikky"
                            required={true}
                        />
                        <FormInput
                            errorClass={fieldError("password")}
                            handleKeyDown={() => handleKeyDown("password")}
                            label="pasword"
                            name="password"
                            type={passwordType.password}
                            value={values.password}
                            handleChange={handleChange}
                        >
                            <button
                                type="button"
                                onClick={() => togglePswdType("password")}
                                className="form__icon"
                            >
                                {passwordType.password === "password" ? (
                                    <BsEyeFill />
                                ) : (
                                    <BsEyeSlashFill />
                                )}
                            </button>
                        </FormInput>
                        <FormInput
                            errorClass={fieldError("confirmPassword")}
                            handleKeyDown={() =>
                                handleKeyDown("confirmPassword")
                            }
                            label="confirm password"
                            name="confirmPassword"
                            type={passwordType.confirmPassword}
                            value={values.confirmPassword}
                            handleChange={handleChange}
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    togglePswdType("confirmPassword")
                                }
                                className="form__icon"
                            >
                                {passwordType.confirmPassword === "password" ? (
                                    <BsEyeFill />
                                ) : (
                                    <BsEyeSlashFill />
                                )}
                            </button>
                        </FormInput>
                        <div className="form__control form__button-container">
                            <FormBtn
                                className={`form__button`}
                                type="button"
                                next={false}
                                text="back"
                                disabled={false}
                                handleClick={() => {
                                    setCurrentStage(currentStage - 1);
                                    handleStageChange("personal", -1);
                                }}
                            />
                            <FormBtn
                                className={`form__button`}
                                type="button"
                                next={true}
                                text="next"
                                disabled={disbleStageTwo}
                                handleClick={() => {
                                    setCurrentStage(currentStage + 1);
                                    handleStageChange("account", 1);
                                }}
                            />
                        </div>
                    </>
                );
                break;

            case 3:
                element = (
                    <>
                        <DefaultFormInput
                            label="first name"
                            value={values.firstName}
                            name="firstname"
                        />
                        <DefaultFormInput
                            label="last name"
                            value={values.lastName}
                            name="lastname"
                        />
                        <DefaultFormInput
                            label="email"
                            value={values.email}
                            name="email"
                        />
                        <DefaultFormInput
                            label="user name"
                            value={values.userName}
                            name="username"
                        />

                        <div className="form__control form__button-container">
                            <FormBtn
                                className={`form__button`}
                                type="button"
                                next={false}
                                text="back"
                                disabled={false}
                                handleClick={() => {
                                    setCurrentStage(currentStage - 1);
                                    handleStageChange("account", -1);
                                }}
                            />

                            <FormBtn
                                className={`form__button`}
                                type="submit"
                                next={false}
                                text="submit"
                                disabled={false}
                                handleClick={null}
                            />
                        </div>
                    </>
                );
                break;

            default:
                break;
        }
        return element;
    };

    // console.log(errors);

    return (
        <>
            <header className="login">
                <h1 className="width">
                    <HomeLogoLink />
                </h1>
            </header>
            <main className="width">
                <section className="stages">
                    {stages.map((stage) => {
                        let { pos, name, done } = stage;

                        return (
                            <div key={pos} className="stage__box">
                                <span
                                    className={`box stage__check ${
                                        currentStage === pos && "active"
                                    } ${done && "checked"}`}
                                >
                                    {pos}
                                </span>
                                <span className="stage__name">{name}</span>
                            </div>
                        );
                    })}
                </section>
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    {displayItem()}
                </form>
            </main>
        </>
    );
};

export default SignUp;
