import { render } from '@testing-library/react';

import { Container } from '.';

describe('Container', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Container />);
    expect(baseElement).toBeTruthy();
  });
});
