import React from 'react';
//import { action } from '@storybook/addon-actions';
import { datePicker } from '@storybook/react/demo';
import './datePicker.css';

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
      <th>Possible Values</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Display Format</td>
      <td>Format in which the date input should be accepted.  This will depend upon the setting of “Display Unit”</td>
      <td><p>MM/DD/YYYY, ,DD/MM/YYYY, M (&Y)Q (&Y) and Y <br/><br/> Default: DD/MM/YYYY</p></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Picker Icon Alignment</td>
      <td>The calendar icon’s display location.</td>
      <td><p>Left, Right <br/><br/> Default: Right</p></td>
    </tr>
  </table>
);