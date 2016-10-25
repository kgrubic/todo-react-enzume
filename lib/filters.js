//all the filters for app

import React from 'react';

module.exports = {

FilterDone : function({listD,done}){
  return (<a href="#" id="a-done" onClick={(event) => { 
    event.preventDefault(); 
    done(listD);
  }}>Done</a>)
},
 FilterAll: function({listA,all}){
  return (<a href="#" id="a-all" onClick={(event) => { 
    event.preventDefault(); 
    all(listA);
  }}>All</a>)
},

 FilterNotDone: function({listN,notDone}){
  return (<a href="#" id="a-notdone" onClick={(event) => { 
    event.preventDefault(); 
    notDone(listN);
  }}>Not Done</a>)
}
}