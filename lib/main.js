import React from 'react';
import {render} from 'react-dom';
import ToDo from './todo';

const appRoot = document.getElementById('content');

render(
  <ToDo />,
  appRoot
);

document.getElementById("enter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("plus").click();
    }
});


