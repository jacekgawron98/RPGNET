import { render } from '@testing-library/react';

import GameMenu from './game-menu';

describe('GameMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameMenu />);
    expect(baseElement).toBeTruthy();
  });
});
