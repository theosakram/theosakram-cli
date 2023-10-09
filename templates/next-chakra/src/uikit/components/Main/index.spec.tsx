import { render } from '@testing-library/react';

import { Main } from '.';

describe('Main', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
