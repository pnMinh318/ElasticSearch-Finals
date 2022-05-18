import { ErrorMessage, Field } from "formik";
import React from "react";

function InputField(props) {
    const { as, type, label, name, rows, placeholder, note } = props;
    return (
        <div className="mb-3">
            {/* label section */}
            <label
                htmlFor={name}
                className="mb-1"
                style={{ fontSize: "1.2rem", fontWeight: "500", float: "left" }}
            >
                <span>{label}</span>
            </label>

            {/* input section */}
            <Field
                as={as} // as for textarea type
                rows={rows} // rows for textarea type
                type={type} // type for text, email, password,...
                name={name}
                placeholder={placeholder}
                // className="text-field"
                style={{ width: "100%", fontSize: "1.3rem" }}
            />

            {/* note */}
            <p
                className="text-muted"
                style={{
                    fontSize: "0.75rem",
                }}
            >
                {note}
            </p>

            {/* error section */}
            <ErrorMessage
                component="div"
                name={name}
                className="text-danger"
                style={{ fontSize: "0.875rem" }}
            ></ErrorMessage>
        </div>
    );
}

export default InputField;