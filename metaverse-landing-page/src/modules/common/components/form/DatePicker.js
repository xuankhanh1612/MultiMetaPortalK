import React, { useRef, useState } from "react";
import { Popover } from "@headlessui/react";
import PropTypes from "prop-types";
import { Calendar } from "react-date-range";
import "../../assets/css/dateRangePicker.scss";
import moment from "moment";
import { XIcon } from "@heroicons/react/outline";

const POPOVER_POSITION = {
  left: "left",
  right: "right",
};

const DatePicker = React.forwardRef(
  (
    {
      label = "",
      position = POPOVER_POSITION.left,
      name,
      onChange,
      className = "",
      formatDate = "DD/MM/YYYY",
      value,
      required,
      children = null,
      ...props
    },
    ref
  ) => {

    const buttonRef = useRef(null);

    const handleSelect = (date) => {
      onChange(moment(date).format("YYYY-MM-DD"));
      // onChange(date);
      buttonRef?.current?.click();
    };

    const onClear = () => {
      onChange("");
      buttonRef?.current?.click();
    };

    const noop = () => {
      // no operation (do nothing real quick)
    };

    return (
      <>
        {label && (
          <div className="mb-1">
            {label}
            {required && <span className="text-red-600">*</span>}
          </div>
        )}
        <Popover
          style={{
            justifyContent:
              position === POPOVER_POSITION.left ? "flex-end" : "flex-start",
          }}
          className={`date-range-picker ${className}`}
        >
          <Popover.Button
            className="flex w-full text-left justify-between relative px-4 py-2"
            ref={buttonRef}
          >
            {children ? (
              children
            ) : (
              <>
                <div>{value ? moment(value).format(formatDate) : ""}</div>
                {value && (
                  <div onClick={onClear} className="close-wrapper">
                    <XIcon className="close" />
                  </div>
                )}
              </>
            )}
            {required && (
              <input
                tabIndex={-1}
                autoComplete="off"
                style={{
                  opacity: 0,
                  width: "100%",
                  height: 1,
                  position: "absolute",
                  bottom: 0,
                }}
                value={value}
                onChange={noop}
                onFocus={() => buttonRef?.current?.focus()}
                required={required}
              />
            )}
          </Popover.Button>
          <Popover.Panel className={`date-picker active`}>
            <Calendar
              weekStartsOn={1}
              date={value ? new Date(value) : null}
              onChange={handleSelect}
              ref={ref}
              {...props}
            />
          </Popover.Panel>
        </Popover>
      </>
    );
  }
);

DatePicker.propTypes = {
  position: PropTypes.oneOf([POPOVER_POSITION.left, POPOVER_POSITION.right]),
  callback: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default DatePicker;
