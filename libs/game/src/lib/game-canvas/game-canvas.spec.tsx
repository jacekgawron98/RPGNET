import { render } from '@testing-library/react';

import GameCanvas from './game-canvas';

describe('GameCanvas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameCanvas />);
    expect(baseElement).toBeTruthy();
  });
});
