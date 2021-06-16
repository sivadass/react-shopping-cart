import React from "react";
import classNames from "classnames";

const Textarea = ({
  label,
  placeholder,
  className,
  field,
  form: { touched, errors },
  ...props
}) => (
  <div
    className={classNames("form-group", className, {
      error: touched[field.name] && errors[field.name]
    })}
  >
    {label && (
      <label className="form-label" htmlFor={field.name}>
        {label}
      </label>
    )}
    <textarea
      className={classNames("form-control", {
        "is-invalid": touched[field.name] && errors[field.name]
      })}
      placeholder={placeholder}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="invalid-feedback">{errors[field.name]}</div>
    )}
  </div>
);

export default Textarea;
