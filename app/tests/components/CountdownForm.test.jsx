var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () =>{

  it('should exist', () =>{
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () =>{
    var spy = expect.createSpy();
    var coundDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(coundDownForm));

    coundDownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () =>{
    var spy = expect.createSpy();
    var coundDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(coundDownForm));
    coundDownForm.refs.seconds.value = 'ert109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
