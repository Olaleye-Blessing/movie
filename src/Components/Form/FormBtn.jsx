const FormBtn = ({ type, disabled, next, text, handleClick }) => {
    return (
        <button
            type={type}
            className={`form__button ${disabled && "disabled"} ${
                next && "form__button-next"
            }`}
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default FormBtn;
