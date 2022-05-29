import { useCallback, useRef, useState } from 'react';

export interface useInputPropTypes {
  initialValue?: string;
  validator?: (value: string) => boolean;
  preProcessor?: (value: string) => string;
}

function useInput({ initialValue, validator, preProcessor }: useInputPropTypes) {
  const isValid = useRef<boolean>(false);

  const [value, setValue] = useState<string>(initialValue ?? '');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validator) isValid.current = validator(e.target.value);
      preProcessor ? setValue(preProcessor(e.target.value)) : setValue(e.target.value);
    },
    [setValue, preProcessor, validator],
  );

  return [value, handleChange, isValid.current] as const;
}

export default useInput;
