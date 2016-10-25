import React from 'react';

module.exports = {

FilterDone : function({listD,done}){
  return (<button id="button-done" onClick={(event) => { 
    event.preventDefault(); 
    done(listD);
  }}>Done</button>)
},
 FilterAll: function({listA,all}){
  return (<button id="button-all" onClick={(event) => { 
    event.preventDefault(); 
    all(listA);
  }}>All</button>)
},

 FilterNotDone: function({listN,notDone}){
  return (<button id="button-notdone" onClick={(event) => { 
    event.preventDefault(); 
    notDone(listN);
  }}>Not Done</button>)
}
}