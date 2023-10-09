import { render } from '@testing-library/react';

import { DarkModeSwitch } from '.';

describe('DarkModeSwitch', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<DarkModeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
