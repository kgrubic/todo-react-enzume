 "use strict";


import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ToDo from '../lib/todo';
import Form from '../lib/form';
import Task from '../lib/task';
import ListOfTasks from '../lib/listOfTasks';
import Filters from '../lib/filters';

describe('<ToDo />', () => {
  it('contains an <Form/> component', function () {
    const wrapper = shallow(<ToDo/>);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  it('contains an <ListOfTasks/> component', function () {
    const wrapper = mount(<ToDo/>);
    expect(wrapper.find(ListOfTasks)).to.have.length(1);
  });

  it('contains an <FilterNotDone/> component', function () {
    const wrapper = mount(<ToDo/>);
    expect(wrapper.find(Filters.FilterNotDone)).to.have.length(1);
  });

   it('contains an <FilterDone/> component', function () {
    const wrapper = mount(<ToDo/>);
    expect(wrapper.find(Filters.FilterDone)).to.have.length(1);
  });

   it('contains an <FilterAll/> component', function () {
    const wrapper = mount(<ToDo/>);
    expect(wrapper.find(Filters.FilterAll)).to.have.length(1);
  });


  it('checking all function on ToDo component', function () {
    const wrapper = mount(<ToDo/>);
    wrapper.setState({ listToDo: [] });
    wrapper.setState({ filterToDo: [] });
    expect(wrapper.props().add).to.be.defined;
    expect(wrapper.props().markAsDone).to.be.defined;

    it('checking add', function () { 
    //testion add function of todo component
      wrapper.instance().add('Clean Home');
      console.log(wrapper.state().listToDo);
      let one = new Task('Clean Home',false);

      expect(wrapper.state().listToDo).to.eql([one]);
      expect(wrapper.state().filterToDo).to.eql([one]);
    })

    //testing markAsDone() function of todo component
    it('checking markAsDone', function () { 
      wrapper.instance().markAsDone('Clean Home');
      //console.log(wrapper.state().listToDo[0].getDone());
      expect(wrapper.state().listToDo[0].getDone()).to.eql(true);
      expect(wrapper.state().filterToDo[0].getDone()).to.eql(true);
    })

    it('checking done', function () { 
      //testing done() function of todo component
      console.log(wrapper.state().filterToDo);
      wrapper.instance().done([one]);
      one.setDone(true);
      expect(wrapper.state().filterToDo).to.eql([one]);
      expect(wrapper.state().listToDo).to.eql([one]);
    });
    it('checking notDone', function () { 
      let two = new Task('Sleap',false);
      wrapper.instance().notDone([two]);
      expect(wrapper.state().filterToDo.length).to.eql(1);
      expect(wrapper.state().listToDo).length.to.eql(2);
    });

    it('checking all', function () { 
      expect(wrapper.state().listToDo).length.to.eql(2);
    });

  });
});