import { DATA_TYPE } from "../constants";
import InputText from "./form/InputText";
import InputNumber from "./form/InputNumber";
import ReactSelect from "./form/ReactSelect";
import SearchByKeyword from "./form/SearchByKeyword";
import DatePicker from "./form/DatePicker";
import { Controller } from "react-hook-form";

export const FormRenderItem = ({
  className = "",
  control,
  data_type,
  name,
  ...props
}) => {
  let render = null;
  switch (data_type) {
    case DATA_TYPE.TEXT: {
      render = <InputText name={name} control={control} {...props} />;
      break;
    }
    case DATA_TYPE.NUMBER: {
      render = (
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputNumber {...props} {...field} />}
        />
      );
      break;
    }
    case DATA_TYPE.SELECT: {
      render = (
        <Controller
          name={name}
          control={control}
          render={({ field }) => <ReactSelect {...props} {...field} />}
        />
      );
      break;
    }
    case DATA_TYPE.NUMBER: {
      render = <InputText name={name} control={control} {...props} />;
      break;
    }
    case DATA_TYPE.SEARCH: {
      render = <SearchByKeyword name={name} control={control} {...props} />;
      break;
    }
    case DATA_TYPE.DATE: {
      render = (
        <Controller
          name={name}
          control={control}
          render={({ field }) => <DatePicker {...props} {...field} />}
        />
      );
      break;
    }
    default: {
      render = (
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...props} {...field} />}
        />
      );
      break;
    }
  }
  return <div className={className}>{render}</div>;
};
