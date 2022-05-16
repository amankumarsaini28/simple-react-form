import { useCallback, useState } from "react";
import { sleep } from "../sleep";

export const useForm = (defaultState) => {
    const [value, setValue] = useState(defaultState);
    const [buttonState, setButtonState] = useState(true);
  
    const onChange = useCallback((controlName) => {
      return (event) => setValue({...value, [controlName]: event.target.value});
    }, [value]);
  
    const onSubmit = useCallback(async (event) => {
      event.preventDefault();
      setButtonState(false);
      await sleep(1000);
      setButtonState(true);
      console.log(value);
    }, [value, buttonState]);
  
    return {
      value,
      onChange,
      onSubmit,
      buttonState
    };
  };
  