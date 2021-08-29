require('mocha');
import tester from '../../bootstrap';
import * as assert from 'assert';

tester('test/app/service/Test.test.js', async it => {
  it('sayHi', async ctx => {
    const result = await ctx.service.test.sayHi('egg');
    assert(result === 'hi, egg');
  });
});
