import React from 'react';
//import { action } from '@storybook/addon-actions';
import { datePicker } from '@storybook/react/demo';

export default {
  title: 'Date Picker',
  component: datePicker,
};

export const Parameters = () => (
  <table>
    <tr>
      <th>Sr. No.</th>
      <th>Names</th>
      <th>Purpose</th>
    </tr>
  </table>
);