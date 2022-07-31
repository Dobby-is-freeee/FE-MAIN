import React, { useCallback, useMemo, useState } from 'react';
import {
  default as ReactSelect,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  StylesConfig,
  Props,
  MultiValue,
  SingleValue,
} from 'react-select';
import styled from 'styled-components';

import { Close, Dropdown } from '@/assets/images';
import { theme } from '@/styles';

function getSelectValue(value: ValueType, options: SelectOption[]): OptionType {
  if (Array.isArray(value)) {
    return options?.filter((option) => value.includes(option.value)) as OptionType;
  }

  return options?.find((option) => option.value === value) as OptionType;
}

// Select 관련 styled
interface SelectDropDownStyleProps {
  visible: boolean;
}

const SelectDropDown = styled.div<SelectDropDownStyleProps>`
  display: flex;
  align-items: center;
  padding-right: 16px;

  svg {
    transition: all 0.2s ease;
    transform: rotate(${({ visible }) => (visible ? '180deg' : '0')});
  }
`;

// Select 관련 Type
interface SelectOption {
  label: string | React.ReactNode;
  value: string | number;
}
type OptionType = MultiValue<SelectOption> | SingleValue<SelectOption>;
type ValueType = string | number | Array<number | string>;

interface SelectProps extends Omit<Props<SelectOption>, 'value' | 'onInputChange' | 'onChange'> {
  /**
   * Select의 크기를 조정한다.
   */
  width?: string;
  /**
   * dropDown icon을 숨긴다.
   */
  showDropDownIcon?: boolean;
  /**
   * select change 옵션을 받는다.
   */
  onChange?: (option: OptionType) => void;
  /**
   * Select의 값을 설정한다. options의 value 값을 넣어야 한다.
   */
  value: ValueType;
  /**
   * input을 이용해 Tag를 만들 수 있다.
   */
  inputMode?: boolean;
}

export const Select = ({
  options,
  isMulti,
  value,
  width = '100%',
  inputMode = false,
  isSearchable = false,
  isClearable = false,
  showDropDownIcon = true,
  noOptionsMessage = () => '옵션이 없습니다.',
  onChange,
  ...props
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState<OptionType>(() => getSelectValue(value, options as SelectOption[]));

  const handleOptionChange = (option: OptionType) => {
    setSelectValue(option);
    onChange?.(option);
  };

  const [inputValue, setInputValue] = useState<string>('');
  const [inputValues, setInputValues] = useState<SelectOption[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (!inputMode) {
        return;
      }

      if (e.code === 'Backspace') {
        if (inputValue) {
          return;
        }
        return setInputValues((prev) => prev.slice(0, prev.length - 1));
      }

      if (e.code === 'Enter') {
        if (!inputValue) {
          return;
        }

        if (e.nativeEvent.isComposing === false) {
          setInputValues((prev) => {
            if (prev.find((option) => option.value === inputValue)) {
              onChange?.(prev);
              return prev;
            }

            const newInputValues = [...prev, { value: inputValue, label: inputValue }];
            onChange?.(newInputValues);
            return newInputValues;
          });

          setInputValue('');
        }
      }
    },
    [inputMode, inputValue, onChange],
  );

  const styles: StylesConfig<SelectOption> = useMemo(
    () => ({
      container: (provided) => ({
        ...provided,
        width,
        color: theme.colors.black,
        lineHeight: '26px',
        letterSpacing: '0.03em',
        fontSize: '16px',
        border: 'none',
      }),
      control: (provided, state) => ({
        ...provided,
        borderRadius: '4px',
        backgroundColor: state.isDisabled ? theme.colors.gray1 : theme.colors.white,
        color: state.isDisabled ? theme.colors.gray2 : theme.colors.white,
        borderColor: state.isFocused ? theme.colors.primary : theme.colors.gray2,
        boxShadow: 'none',
        cursor: inputMode ? 'text' : 'pointer',
        '&:hover': {
          borderColor: state.isFocused ? theme.colors.primary : theme.colors.gray2,
        },
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        width,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: state.isMulti ? 'wrap' : 'nowrap',
        minHeight: '54px',
        padding: '9px 24px',
      }),
      singleValue: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
      }),
      multiValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        borderRadius: '36px',
        backgroundColor: 'rgba(78, 53, 231, 0.1)',
        padding: '7px 0',
        lineHeight: '150%',
        height: '36px',
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        color: theme.colors.primary,
        fontWeight: 500,
        fontSize: '14px',
        paddingLeft: '20px',
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        fontSize: '24px',
        paddingRight: '6px',
        '& svg': {
          width: '24px',
          height: '24px',
          marginTop: '2.5px',
        },
        '&:hover': {
          backgroundColor: 'transparent',
          cursor: 'pointer',
          opacity: 0.5,
        },
      }),
      input: (provided) => ({
        ...provided,
        fontWeight: 500,
        margin: 0,
        padding: 0,
      }),
      placeholder: (provided) => ({
        ...provided,
        fontWeight: 500,
        position: 'absolute',
        margin: 0,
        padding: 0,
      }),
      option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        padding: '12px 24px',
        fontWeight: 500,
        fontSize: '16px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: theme.colors.black,
        backgroundColor: state.isFocused
          ? state.isSelected
            ? theme.colors.gray2
            : theme.colors.gray1
          : state.isSelected
          ? theme.colors.gray2
          : theme.colors.white,
        '&:hover': {
          backgroundColor: state.isSelected ? theme.colors.gray2 : theme.colors.gray1,
        },
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
    }),
    [inputMode, width],
  );

  const MultiValueRemove = ({ innerProps, data }: MultiValueRemoveProps<SelectOption>) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (inputMode) {
        return setInputValues((prev) => {
          const newInputValues = prev.filter((option) => option.value !== data.value);

          onChange?.(newInputValues);
          return newInputValues;
        });
      }

      return innerProps.onClick?.(e);
    };

    return (
      <div className={innerProps.className} onClick={handleClick}>
        <Close />
      </div>
    );
  };

  const DropdownIndicator = ({ selectProps }: DropdownIndicatorProps<SelectOption>) => {
    if (!showDropDownIcon || inputMode) {
      return null;
    }

    return (
      <SelectDropDown visible={selectProps.menuIsOpen}>
        <Dropdown />
      </SelectDropDown>
    );
  };

  return (
    <ReactSelect
      {...props}
      styles={styles}
      inputValue={inputValue}
      value={inputMode ? inputValues : selectValue}
      options={options}
      menuIsOpen={inputMode ? false : props.menuIsOpen}
      isSearchable={inputMode ? true : isSearchable}
      isClearable={inputMode ? false : isClearable}
      isMulti={inputMode ? true : isMulti}
      onInputChange={handleInputChange}
      noOptionsMessage={noOptionsMessage}
      onChange={handleOptionChange}
      onKeyDown={handleKeyDown}
      components={{ ...props.components, MultiValueRemove, DropdownIndicator }}
    />
  );
};
