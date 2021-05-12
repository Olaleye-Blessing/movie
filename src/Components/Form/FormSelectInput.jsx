const FormSelectInput = () => {
    return (
        <div className="form__control">
            <label htmlFor="name" className="form__label">
                label
            </label>
            <div className="select-wrapper">
                <select id="name" className="form__select">
                    <option value="empty"></option>
                    <option value="ade">ade</option>
                    <option value="ope">ope</option>
                    <option value="tope">tope</option>
                </select>
            </div>
        </div>
    );
};

export default FormSelectInput;
