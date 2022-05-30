import { useCallback, useState } from 'react';

export interface useBooleanPropTypes {
  defaultValue: boolean;
}

function useBoolean({ defaultValue = false }: useBooleanPropTypes) {
  const [value, setValue] = useState(defaultValue);

  const toggleBoolean = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const handleBoolean = useCallback((next: boolean) => {
    setValue(next);
  }, []);

  return [value, toggleBoolean, handleBoolean] as const;
}

export default useBoolean;
