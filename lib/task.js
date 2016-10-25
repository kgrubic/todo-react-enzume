var Task = function(value,done){
  this.value = value;
  this.done = done;

  Task.prototype.setValue = function(value){
        this.value = value;
  };

  Task.prototype.getValue = function(){
        return this.value
  };

  Task.prototype.setDone = function(done){
        this.done = done;
  };

  Task.prototype.getDone = function(){
        return this.done;
  };
}

module.exports = Task;
