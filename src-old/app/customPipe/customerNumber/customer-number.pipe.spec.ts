import { CustomerNumberPipe } from './customer-number.pipe';

describe('CustomerNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
