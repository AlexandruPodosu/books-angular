import { CustomPipe } from './checkoutPrice.pipe';

describe('CustomPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipe();
    expect(pipe).toBeTruthy();
  });
});
