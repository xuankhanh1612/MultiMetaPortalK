import React from "react";

const Course = () => {
  return (
    <div className="bg-secondary p-10 w-3/4">
      <h2 className="text-white font-bold text-lg text-center">
        Connect with Airclass
      </h2>
      <div className="mt-5 flex items-center justify-center">
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="button"
          className="mx-2 text-white border border-white px-8 py-2 rounded-lg bg-transparent cursor-pointer"
        >
          No
        </button>
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="button"
          className="bg-purple mx-2 text-white border px-8 py-2 rounded-lg cursor-pointer"
          style={{ border: "1px solid #6700FF" }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Course;
