import React from "react";

function PermissionWrap({ children, permissions, roles }) {
  const checkPermission = (roles, permissions) => {
    if (!permissions) {
      return true;
    }
    let flag = false;
    if (roles) {
      let indexRole = roles?.findIndex((r) => r.toLowerCase() === permissions);
      return indexRole !== undefined && indexRole !== -1 ? true : false;
    }
    return flag;
  };

  if (checkPermission(roles, permissions)) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}

export default PermissionWrap;
