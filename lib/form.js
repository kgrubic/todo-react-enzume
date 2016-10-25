import React from 'react';

module.exports = function Form({add}){
  let input;
  return (
    <div id="enter">
      <input id="task" ref={node => {
        input = node;
      }} />
      <lable id="plus" onClick={() => {
        add(input.value);
        input.value = '';
      }}>
        +
      </lable>
    </div>
  );
};
