import styled, { css } from 'styled-components';
import DatePicker, { DatePickerProps, DayValue, Day } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import { Calendar } from '@/assets/images';
import { theme } from '@/styles';

const DatePickerStyle = styled.div<{ disabled?: boolean }>`
  .DatePicker__input {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 54px;
    border-radius: 4px;
    padding: 16px 15px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.03em;
    transition: border-color 300ms linear;
    outline: none;
    background: url(${Calendar}) no-repeat 16px 15px;

    &::placeholder {
      padding-left: 32px;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    ${({ disabled }) =>
      disabled &&
      css`
        & {
          color: ${({ theme }) => theme.colors.gray2};
          border-color: ${({ theme }) => theme.colors.gray1};
          background-color: ${({ theme }) => theme.colors.gray1};
        }
      `}
  }

  .Calendar {
    width: 268px;
    min-height: 341px;

    ${({ disabled }) =>
      disabled &&
      css`
        display: none;
      `}

    /* 캘린더 body */
		.Calendar__section.-shown {
      padding: 0 15px;
    }

    /* 년도와 월을 나타내는 헤더. ex) 2021 1월 */
    .Calendar__monthYear {
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      width: 100%;

      button {
        font-weight: 500;

        &:hover {
          background: transparent;
        }
      }
    }

    .Calendar__monthArrow {
      width: 12px;
      height: 12px;
    }

    /* 년도, 월 선택 시 나타나는 선택창 */
    .Calendar__yearSelector,
    .Calendar__monthSelector {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      li {
        width: 100%;
        button {
          padding: 6px 3px;
          border-radius: 50px;
        }
      }
    }

    /* 일 ~ 월 */
    .Calendar__weekDays {
      width: 100%;
      padding: 0;
      padding-bottom: 5px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(7, 33.5px);
      abbr {
        width: 100%;
      }
    }

    .Calendar__section.-hiddenNext,
    .Calendar__section.-hiddenPrevious {
      transform: translateX(100%);
    }

    .Calendar__weekRow {
      height: 100%;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(7, 33.5px);
      margin-bottom: 10px;
      .Calendar__day {
        width: 100%;
        height: 33.5px;
        &.-ltr {
          margin: 0;
          min-height: unset;
        }

        &.-today {
          font-weight: normal !important;
          color: #000;
          background: none;

          &::after,
          &.-selectedStart::after,
          &.-selectedEnd::after,
          &.-selectedBetween::after {
            display: inline-block !important;
            content: '' !important;
            position: absolute !important;
            top: 4px !important;
            left: unset !important;
            right: 2px !important;
            width: 4px !important;
            height: 4px !important;
            border-radius: 100% !important;
            background-color: ${({ theme }) => theme.colors.primary} !important;
            opacity: unset !important;
          }
        }
      }
    }
  }
`;

export function generateDayValue(date: Date | string | null): Day | undefined {
  if (date === null) {
    return;
  }
  if (typeof date === 'string') {
    const transformDate = new Date(date);
    return {
      year: transformDate.getFullYear(),
      month: transformDate.getMonth() + 1,
      day: transformDate.getDate(),
    };
  } else {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }
}

export function makeTensDigit(digit: number) {
  return digit > 9 ? digit : `0${digit}`;
}

export interface CustomPickerProps extends DatePickerProps<DayValue> {
  disabled?: boolean;
}

export const CustomDatePicker = ({ disabled, maximumDate, value, ...props }: CustomPickerProps) => {
  const locale = {
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],

    weekDays: [
      {
        name: 'sunDay',
        short: 'Su',
        isWeekend: true,
      },
      {
        name: 'monDay',
        short: 'Mo',
      },
      {
        name: 'tuesday',
        short: 'Tu',
      },
      {
        name: 'wednesDay',
        short: 'We',
      },
      {
        name: 'thursDay',
        short: 'Th',
      },
      {
        name: 'friDay',
        short: 'Fr',
      },
      {
        name: 'saturDay',
        short: 'Sa',
        isWeekend: true,
      },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    getToday(gregorianTodayObject: Day) {
      return gregorianTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date: Day) {
      return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date: Day) {
      return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit: any) {
      return digit;
    },

    // texts in the date picker
    nextMonth: 'Next Month',
    previousMonth: 'Previous Month',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    defaultPlaceholder: '',

    // for input range value
    from: 'from',
    to: 'to',

    // used for input value when multi dates are selected
    digitSeparator: ',',

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
  };

  const formatInputText = () => {
    if (value) {
      const { year, month, day } = value;
      return `${year}-${makeTensDigit(month)}-${makeTensDigit(day)}`;
    }
    return '';
  };

  return (
    <DatePickerStyle disabled={disabled}>
      <DatePicker
        formatInputText={formatInputText}
        value={value}
        locale={locale}
        colorPrimary={theme.colors.primary}
        shouldHighlightWeekends
        maximumDate={maximumDate || generateDayValue(new Date())}
        {...props}
      />
    </DatePickerStyle>
  );
};
