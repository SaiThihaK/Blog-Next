import { ColorPicker, ColorPickerProps } from 'antd';
import React from 'react';

interface Props extends ColorPickerProps {}
const CustomColorPicker: React.FC<Props> = ({
  value,
  onChange,
  allowClear = true,
}) => {
  return (
    <ColorPicker
      value={value}
      onChange={onChange}
      format="hex"
      allowClear={allowClear}
      showText
    />
  );
};

export default CustomColorPicker;
