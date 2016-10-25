import React from 'react';
module.exports = function OneTask({task,complit}){

  //console.log(task);
  return (<div><input type="checkbox" class="regular-radio" checked={task.getDone()} onChange={() => {
        complit(task.value);
      }}/><lable>{task.value}</lable></div>);
}

