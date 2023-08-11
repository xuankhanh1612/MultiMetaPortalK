import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Modal from "./Modal";
const ModalConfirmDelete = ({
  open,
  setOpen,
  title,
  content,
  actionConfirmDelete = false,
  id,
}) => {
  const doAction = () => {
    if (actionConfirmDelete) {
      actionConfirmDelete(id);
    }
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="p-4">
        <div
          className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100`}
        >
          <ExclamationIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <div className="mt-2">
            <p className="text-sm text-gray-500">{content}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 text-center mb-4">
        <button
          type="button"
          className="w-20 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 border-indigo-600 text-base font-medium text-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Không
        </button>
        <button
          type="button"
          className="w-20 ml-5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={doAction}
        >
          Có
        </button>
      </div>
    </Modal>
  );
};

export default React.memo(ModalConfirmDelete);
