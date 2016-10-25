//Input form to enter todo item

import React from 'react';

module.exports = function Form({add}){
  let input;
  return (
    <div id="enter">
      <input id="task" placeholder="enter new todo item" ref={node => {
        input = node;
      }} />
      <lable id="plus" onClick={() => {
        add(input.value);
        input.value = '';
      }}>
        Add
      </lable>
    </div>
  );
};
