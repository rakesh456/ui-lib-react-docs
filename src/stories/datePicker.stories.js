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
      <td>Icon Alignment</td>
      <td>The calendar icon’s display location.</td>
      <td><p>Left, Right <br/><br/> Default: Left</p></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Date String Alignment</td>
      <td>Allows alignment of date either to left or right</td>
      <td><p>Left, Right <br/><br/> Default: Left</p></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Lower Limit</td>
      <td>Set lower date limit on the datepicker</td>
      <td><p>Start date in given display format.<br/><br/>Default: Today</p></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Upper Limit</td>
      <td>Set upper date limit on the datepicker</td>
      <td><p>End date in given display format<br/><br/>Default: None</p></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Upper Limit</td>
      <td>Set upper date limit on the datepicker</td>
      <td><p>End date in given display format<br/><br/>Default: None</p></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Show Buttons</td>
      <td>Show confirmation buttons below date picker</td>
      <td><p>False and True.<br/><br/>Default: False<br/><br/>Name of the button can be changed to any other name
      <br/><br/>date-btn-primary = “select”<br/>date-btn-secondary =”clear”</p></td>
    </tr>
    <tr>
      <td>8</td>
      <td>Indicator List</td>
      <td>List of dates that need to have an indicator against them in display. Each indicator list will have a specific color and a list of dates associated with them 
      </td>
      <td><p>Can be n number of indicator.</p></td>
    </tr>
    <tr>
      <td>9</td>
      <td>Is Disabled</td>
      <td>Show disabled date picker</td>
      <td><p>Default: False</p></td>
    </tr>
    <tr>
      <td>10</td>
      <td>Show Clear Icon</td>
      <td>Option to show close button.</td>
      <td><p>Default: False</p></td>
    </tr>
    <tr>
      <td>11</td>
      <td>Manual Entry</td>
      <td>This will disable to manual date entry.</td>
      <td><p>Default: False</p></td>
    </tr>
  </table>
);