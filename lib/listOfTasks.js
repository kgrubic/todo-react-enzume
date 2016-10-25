import React from 'react';
import OneTask from './oneTask';

module.exports = function ListOfTasks ({data,complit}){

    var list = data.map(function(task,i){
      //console.log(task.value);
      return(<OneTask task={task} key={i} complit={complit}/>);
    });
      
    return(<div id="tasks"><ul>{list}</ul></div>)
}