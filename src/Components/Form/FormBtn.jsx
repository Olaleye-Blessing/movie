const FormBtn = ({ type, disabled, next, text, handleClick, className }) => {
    return (
        <button
            type={type}
            className={`form__button ${className} ${disabled && "disabled"} ${
                next && "form__button-next"
            }`}
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

FormBtn.defaultProps = {
    className: "",
};

export default FormBtn;
