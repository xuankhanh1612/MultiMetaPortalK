import React from "react";
import { Controller } from "react-hook-form";
const InputText = ({
  control,
  label = "",
  name,
  placeholder = "",
  type = "text",
  required = false,
  isDisabled = false,
  error_message = "",
  ...props
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="">
            {label && (
              <div className="mb-1">
                {label}
                {required && <span className="text-red-600">*</span>}
              </div>
            )}
            <div>
              <input
                className={`block w-full bg-white py-2 pl-2 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-500 sm:text-sm ${
                  isDisabled ? "bg-gray-200" : ""
                }`}
                placeholder={placeholder}
                type={type}
                name={name}
                required={required}
                disabled={isDisabled}
                {...field}
              />
            </div>
          </div>
        )}
      />
      {error_message ? (
        <div className="error-message">{error_message}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default React.memo(InputText);
