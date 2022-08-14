import { render } from '@testing-library/react';

import GameToolbar from './game-toolbar';

describe('GameToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
