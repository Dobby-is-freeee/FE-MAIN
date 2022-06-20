import { useCallback, useState } from 'react';

export interface useBooleanProps {
  defaultValue: boolean;
}

function useBoolean({ defaultValue = false }: useBooleanProps) {
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
