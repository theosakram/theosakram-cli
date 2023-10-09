import { render } from '@testing-library/react';

import { CTA } from '.';

describe('CTA', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<CTA />);
    expect(baseElement).toBeTruthy();
  });
});
