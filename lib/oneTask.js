import React from 'react';
module.exports = function OneTask({task,complit}){

  //console.log(task);
  return (<div><li>{task.value}<input type="checkbox" checked={task.getDone()} onChange={() => {
        complit(task.value);
      }}/></li></div>);
}

