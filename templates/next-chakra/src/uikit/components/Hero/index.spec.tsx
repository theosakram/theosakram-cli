import { render } from '@testing-library/react';

import { Hero } from '.';

describe('Hero', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Hero />);
    expect(baseElement).toBeTruthy();
  });
});
