/* eslint-disable */
import { DatePickerProps } from 'antd';
import React, { Ref } from 'react';

import * as S from './index.styles';

export type BaseDatePickerProps = DatePickerProps;

// eslint-disable-next-line react/display-name
const DatePicker = React.forwardRef<React.Component<BaseDatePickerProps>, any>(
  ({ className, ...props }, ref) => <S.DatePicker ref={ref} className={className} {...props} />
);

type DatePickerForwardRef = typeof DatePicker;

interface IBaseDatePicker extends DatePickerForwardRef {
  RangePicker: typeof S.RangePicker;
  TimePicker: typeof S.TimePicker;
}

export const BaseDatePicker = DatePicker as IBaseDatePicker;

BaseDatePicker.RangePicker = S.RangePicker;
BaseDatePicker.TimePicker = S.TimePicker;
