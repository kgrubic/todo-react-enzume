// one item of todo app

import React from 'react';

module.exports = function OneTask({task,complit}){
  //console.log(task);
  return (<div><input type="checkbox" className="regular-radio" checked={task.getDone()} onChange={() => {
        complit(task.value);
      }}/><lable>{task.value}</lable></div>);
}
