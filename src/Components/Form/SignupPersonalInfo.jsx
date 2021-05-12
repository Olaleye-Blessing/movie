import FormBtn from "./FormBtn";
import FormInput from "./FormInput";
// import FormSelectInput from "./FormSelectInput";

const SignupPersonalInfo = ({
    values,
    fieldError,
    handleKeyDown,
    handleChange,
    errors,
    disbleStageOne,
    setCurrentStage,
    handleStageChange,
    currentStage,
}) => {
    let { firstName, lastName, email } = errors;

    return (
        <section>
            <FormInput
                errorClass={fieldError("firstName")}
                handleKeyDown={() => handleKeyDown("firstName")}
                handleChange={handleChange}
                value={values.firstName}
                label="first name"
                name="firstName"
                placeholder="Blessing"
                required={true}
            >
                {firstName.msg && <small>{firstName.msg}</small>}
            </FormInput>

            <FormInput
                errorClass={fieldError("lastName")}
                handleKeyDown={() => handleKeyDown("lastName")}
                value={values.lastName}
                handleChange={handleChange}
                label="last name"
                name="lastName"
                placeholder="Olaleye"
                required={true}
            >
                {lastName.msg && <small>{lastName.msg}</small>}
            </FormInput>
            <FormInput
                errorClass={fieldError("email")}
                handleKeyDown={() => handleKeyDown("email")}
                value={values.email}
                handleChange={handleChange}
                label="email"
                name="email"
                placeholder="Olaleye@gmail.com"
                required={true}
            >
                {email.msg && <small>{email.msg}</small>}
            </FormInput>
            {/* <FormSelectInput /> */}
            <div className="form__control form__button-container">
                <FormBtn
                    type="button"
                    disabled={disbleStageOne}
                    text="next"
                    next={true}
                    handleClick={() => {
                        setCurrentStage(currentStage + 1);
                        handleStageChange("personal", 1);
                    }}
                />
            </div>
        </section>
    );
};

export default SignupPersonalInfo;
