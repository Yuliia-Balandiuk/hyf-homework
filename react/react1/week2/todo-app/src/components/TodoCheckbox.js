import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
  margin-right: 1rem;
`;

const TodoCheckbox = ({ checked, setChecked }) => {
  return (
    <Checkbox
      type='checkbox'
      checked={checked}
      onChange={() => setChecked(!checked)}
    ></Checkbox>
  );
};

export default TodoCheckbox;
