import { NameAndLastNamePipe } from './name-and-last-name.pipe';

describe('NameAndLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NameAndLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
