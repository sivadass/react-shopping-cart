import React from "react";
import classNames from "classnames";
import ReactSelect from "react-select";

const Select = ({
  options,
  multi = false,
  type,
  label,
  placeholder,
  field,
  form: { touched, errors, setFieldValue },
  required = false,
  className,
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];

  const onChange = (option) => {
    setFieldValue(
      field.name,
      multi ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return multi
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return multi ? [] : "";
    }
  };

  return (
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
      <ReactSelect
        options={options}
        isMulti={multi}
        value={getValue()}
        onChange={onChange}
        name={field.name}
        className={classNames({
          "is-invalid": touched[field.name] && errors[field.name]
        })}
        placeholder={placeholder}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="invalid-feedback">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default Select;
