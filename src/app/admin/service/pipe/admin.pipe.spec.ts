import { adminPipe } from './admin.pipe';

describe('adminPipe', () => {
  it('create an instance', () => {
    const pipe = new adminPipe();
    expect(pipe).toBeTruthy();
  });
});
