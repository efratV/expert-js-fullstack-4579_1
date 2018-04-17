const sinon = require('sinon')
const EventEmitter = require('events').EventEmitter;
const assert = require('assert');
const utils = require('./utils');



describe('EventEmitter', function () {
  describe('#emit()', function () {
    it('should success if spy.called', function () {
      let spy = sinon.spy();
      let emitter = new EventEmitter();

      emitter.on('test1', spy);
      emitter.emit('test1');
      assert.equal(spy.called, true);
    })

    it('should get arguments from emit', function () {
      let spy = sinon.spy();
      let emitter = new EventEmitter();

      emitter.on('test2', spy);
      emitter.emit('test2', 'arg1', 'arg2');
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWith(spy, 'arg1', 'arg2');
    })
  })
})

