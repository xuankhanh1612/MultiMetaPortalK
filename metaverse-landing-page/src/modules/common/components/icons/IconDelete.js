import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ModalConfirmDelete from "../modals/ModalConfirmDelete";

const IconDelete = ({
  isDisabled = false,
  className = "",
  content = "",
  actionConfirmDelete,
  id,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        className={`wrap-icon-delete ${
          isDisabled ? "disabled" : ""
        } ${className}`}
        onClick={() => setOpen(true)}
      >
        <TrashIcon className="w-4 h-4" />
      </span>
      <ModalConfirmDelete open={open} setOpen={setOpen} content={content} actionConfirmDelete={actionConfirmDelete} id={id} />
    </>
  );
};

export default IconDelete;
