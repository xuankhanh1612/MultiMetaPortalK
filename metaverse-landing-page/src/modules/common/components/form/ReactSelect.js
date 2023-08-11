import React from "react";
import Select from "react-select";
const ReactSelect = React.forwardRef(
  (
    {
      label,
      options = [],
      value = null,
      onChange,
      isMulti = false,
      optionValue = "id",
      optionLabel = "label",
      optionAll = false,
      valueOptionAll = "",
      required = false,
      placeholder = "Tất cả",
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    if (optionAll) {
      options = [
        {
          [optionLabel]: "Tất cả",
          [optionValue]: valueOptionAll,
        },
        ...options,
      ];
    }
    const onChangeSelect = (item) => {
      onChange(item.value);
    };

    const onChangeSelectMulti = (item) => {
      const ids = item.map((v) => {
        return v.value;
      });
      onChange(ids);
    };

    const renderOption = (options) => {
      return options.map((option) => ({
        value: option[optionValue],
        label: option[optionLabel],
      }));
    };

    const nonAccentVietnamese = (str) => {
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
      return str;
    };

    const filterOption = (candidate, input) => {
      return (
        candidate.data.__isNew__ ||
        nonAccentVietnamese(candidate.label.trim()).includes(
          nonAccentVietnamese(input.trim())
        )
      );
    };

    const noop = () => {
      // no operation (do nothing real quick)
    };

    return (
      <div className="mt-2 relative">
        {label ? (
          <div className="mb-1">
            {label}
            {required && <span className="text-red-600">*</span>}
          </div>
        ) : (
          ""
        )}
        {!isMulti ? (
          <Select
            value={renderOption(
              options.filter((option) => option[optionValue] === value)
            )}
            options={renderOption(options)}
            placeholder={placeholder}
            onChange={onChangeSelect}
            filterOption={filterOption}
            isDisabled={isDisabled}
            ref={ref}
            {...props}
          />
        ) : (
          <Select
            value={renderOption(
              options.filter((option) => value.includes(option[optionValue]))
            )}
            options={renderOption(options)}
            placeholder={placeholder}
            onChange={onChangeSelectMulti}
            filterOption={filterOption}
            ref={ref}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            closeMenuOnSelect={false}
            isMulti={true}
            isDisabled={isDisabled}
            {...props}
          />
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
            required={required}
          />
        )}
      </div>
    );
  }
);
export default React.memo(ReactSelect);
