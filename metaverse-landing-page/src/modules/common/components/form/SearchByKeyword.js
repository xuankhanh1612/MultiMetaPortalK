import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Controller } from "react-hook-form";
const SearchByKeyword = ({
  name,
  control,
  placeholder = "",
  onSearch,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="mt-2">
          <div className="mb-1">Tìm kiếm</div>
          <div className="relative w-full text-gray-400 focus-within:text-gray-500">
            <div
              onClick={onSearch}
              className="cursor-pointer absolute inset-y-0 left-0 pl-3 flex items-center"
            >
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search"
              className="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-500 sm:text-sm"
              placeholder={placeholder}
              type="search"
              {...field}
            />
          </div>
        </div>
      )}
    />
  );
};
export default SearchByKeyword;
