import React from "react";
import CircleLoading from "./CircleLoading";

const ButtonSubmit = ({
  className = "btn-outline-custom",
  children,
  isFetching,
  size = 20,
}) => {
  return (
    <button className={className} disabled={isFetching} type="submit">
      {isFetching ? <CircleLoading size={size} /> : children}
    </button>
  );
};
export default React.memo(ButtonSubmit);
