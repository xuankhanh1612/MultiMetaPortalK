import React from "react";
import {FormRenderItem} from "./FormRenderItem";

const FormRender = ({ dataSource, control }) => {
  return dataSource.map(({ name, ...props }, k) => (
    <FormRenderItem key={k} name={name} control={control} {...props} />
  ));
};
export default React.memo(FormRender);
