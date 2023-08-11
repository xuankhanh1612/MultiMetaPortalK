import React, { useState } from "react";
import { useRef } from "react";

const InputFile = ({
  className = "",
  label,
  name,
  value,
  onChange,
  ...props
}) => {
  const [fileName, setFileName] = useState("");
  const ref = useRef();
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(name, file ? file : null);
    }
  };

  return (
    <>
      <div className={`flex items-center ${className}`}>
        <p className="w-36 text-base text-white font-bold mb-0">{label}</p>
        <div className="w-full">
          <div className="w-full flex items-center">
            <input
              type="file"
              name="file"
              hidden
              ref={ref}
              onChange={onChangeFile}
              {...props}
            />
            <div
              onClick={() => ref.current.click()}
              className="cursor-pointer auth-input w-56 mr-2 mb-0 py-4 relative"
            >
              <div
                className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg text-white px-2"
                style={{ background: "#9B9E9F" }}
              >
                Choose file
              </div>
            </div>
            <button
              onClick={() => ref.current.click()}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              type="button"
              className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-purple"
            >
              Upload
            </button>
          </div>
          {fileName ? <div className="mt-1 text-white">{fileName}</div> : null}
        </div>
      </div>
    </>
  );
};
export default React.memo(InputFile);
