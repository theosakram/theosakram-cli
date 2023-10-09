import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Footer', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
