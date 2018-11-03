import $ from 'jquery';
import 'bootstrap';

import './index.scss';

console.log('YO!');

$('#click').on('click', () => {
  $('#text-div').append('WOOF!!!');
});
