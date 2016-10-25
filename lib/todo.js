// main component of todo app

import React from 'react';
import Task from './task';
import ListOfTasks from './listOfTasks';
import Form from './form';
import Filters from './filters';

 "use strict";

export default class ToDo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { listToDo : [] , filterToDo : []} ;
  }

  markAsDone(task){
    var list=this.state.listToDo;
 
      for( var i = 0 ; i < list.length ; i++){
           //console.log("value " + list[i].getValue());
        if(list[i].getValue() == task){
            list[i].setDone(true);
            //console.log(list[i].done)
        break;
        }
      }
      //console.log(list);
      this.setState({listToDo : list});
      this.setState({filterToDo : list});

      //console.log(this.state.listToDo);
  }

  add(str){
      const task = new Task(str,false);

      //const task = { value :str , done: false};
      if(task.getValue().length > 0)
        this.state.listToDo.push(task);
      this.setState({listToDo : this.state.listToDo});
      this.setState({filterToDo : this.state.listToDo});
  }

  // function to filter done

  done(arr){
    let done_list = arr.filter( function(t){
      //console.log(t);
      return t.getDone() === true;
    });
    if(done_list.length > 0)
      this.setState({filterToDo : done_list}); 
   
  }

// function to filter all

  all(arr){
   this.setState({filterToDo : arr}); 
  }

// function to filter not done

  notDone(arr){
    let not_done_list = arr.filter( function(t){
      //console.log(t);
      return t.getDone() === false;
    });
    if(not_done_list.length > 0)
      this.setState({filterToDo : not_done_list}); 
   
  }



  render(){
    var listToDo = this.state.listToDo;
    return (
      <div id="mainPanel">  
        <div id ="inLine" >
        <Form listToDo={listToDo} add={this.add.bind(this)}/>
        <div id = "enter">
          <Filters.FilterDone listD={this.state.listToDo} done = {this.done.bind(this)}/>
          <Filters.FilterAll listA={this.state.listToDo} all = {this.all.bind(this)}/>
          <Filters.FilterNotDone listN={this.state.listToDo} notDone = {this.notDone.bind(this)}/>
          </div>
        <ListOfTasks data={this.state.filterToDo} 
          complit = {this.markAsDone.bind(this)}/>
        </div>
      </div>
  );
  }

}