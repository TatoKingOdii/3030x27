import { FutureDatePipe } from './future-date.pipe';

describe('FutureDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FutureDatePipe();
    expect(pipe).toBeTruthy();
  });
});
