import React from "react";
const InputNumber = React.forwardRef(
  (
    {
      label,
      name,
      value,
      onChange,
      placeholder = "",
      required = false,
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    const onChangeInput = (e) => {
      const { name, value } = e.target;
      onChange(value ? parseInt(value.replaceAll(",", "")) : "");
    };

    return (
      <div className="mt-2">
        <div className="mb-1">
          {label}
          {required && <span className="text-red-600">*</span>}
        </div>
        <input
          className={`block w-full bg-white py-2 pl-2 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-500 sm:text-sm ${
            isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          placeholder={placeholder}
          type="text"
          name={name}
          value={value ? value.toLocaleString() : ""}
          onChange={onChangeInput}
          required={required}
          disabled={isDisabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default React.memo(InputNumber);
