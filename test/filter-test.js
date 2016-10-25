import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Filters from '../lib/filters';



describe("<FilterDone/>", () => {
  it("contains id=button-done", function() {
    const wrapper = shallow(<Filters.FilterDone/>);
    //console.log(wrapper);
    expect(wrapper.find('#button-done').length).to.equal(1);
  });

it('should have props for done and listD', function () {
    const wrapper = shallow(<Filters.FilterDone/>);
    expect(wrapper.props().done).to.be.defined;
    expect(wrapper.props().listD).to.be.defined;
  });
});

describe("<FilterAll/>", function() {
  it("contains id=button-all", function() {
    const wrapper = shallow(<Filters.FilterAll/>);
    //console.log(wrapper);
    expect(wrapper.find('#button-all').length).to.equal(1);
  });

it('should have props for done and listD', function () {
    const wrapper = shallow(<Filters.FilterAll/>);
    expect(wrapper.props().all).to.be.defined;
    expect(wrapper.props().listA).to.be.defined;
  });
});