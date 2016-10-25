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
    wrapper.instance().add('Clean Home');
    console.log(wrapper.state().listToDo);
    let task = new Task('Clean Home',false);
    expect(wrapper.state().listToDo).to.eql([task]);
  });
});