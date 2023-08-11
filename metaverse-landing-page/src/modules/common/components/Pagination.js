import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "../assets/css/pagination.scss";

const Pagination = ({
  total,
  current,
  limit,
  onChangePage,
  items = 0,
  className,
  isDisabled = false,
  ...props
}) => {
  let count = Math.ceil(total / limit);

  let arrayShowLeft = [];
  let arrayShowRight = [];
  if (count > 7) {
    if (current > Math.ceil(count / 2)) {
      arrayShowLeft = [1, 2, 3];
      if (count - current == 0) {
        arrayShowRight = [current - 2, current - 1, current];
      } else {
        arrayShowRight = [current - 1, current, current + 1];
      }
    } else {
      if (current == 1) {
        arrayShowLeft = [1, 2, 3];
      } else {
        arrayShowLeft = [current - 1, current, current + 1];
      }
      arrayShowRight = [count - 2, count - 1, count];
    }
  } else {
    arrayShowLeft = Array.from(Array(count).keys()).map((value) => value + 1);
  }

  return (
    <nav
      className={`pagination md:flex md:items-center ${
        className ? className : ""
      }`}
    >
      <div className="md:w-1/2">
        Hiển thị từ{" "}
        <span className="font-bold">{(current - 1) * limit + 1}</span> đến{" "}
        <span className="font-bold">{(current - 1) * limit + items}</span> của{" "}
        <span className="font-bold">{total}</span> kết quả
      </div>
      <div className="md:w-1/2 md:text-right">
        <div className="inline-flex shadow-sm">
          <div
            onClick={() => onChangePage(current - 1)}
            className={`page-index  ${
              current === 1 || isDisabled ? "pointer-events-none" : ""
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
          {arrayShowLeft.map((item) => {
            return (
              <div
                onClick={() => {
                  onChangePage(item);
                }}
                className={`page-index ${current === item ? "active" : ""} ${isDisabled ? "pointer-events-none" : ""}`}
                key={item}
              >
                {item}
              </div>
            );
          })}
          {count > 9 && <div className={`page-index`}>...</div>}
          {arrayShowRight.map((item) => {
            return (
              <div
                onClick={() => {
                  onChangePage(item);
                }}
                className={`page-index ${current === item ? "active" : ""} ${isDisabled ? "pointer-events-none" : ""}`}
                key={item}
              >
                {item}
              </div>
            );
          })}
          <div
            onClick={() => onChangePage(current + 1)}
            className={`page-index ${
              current === count || isDisabled ? "pointer-events-none" : ""
            }`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Pagination;
