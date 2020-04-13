import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../';

describe('Switch component test', () => {
  it('should have an initial 0 status', () => {
    const render = shallow(<Switch />);
    debugger;
    expect(render.text()).toEqual('Status: 0');
  });
});
