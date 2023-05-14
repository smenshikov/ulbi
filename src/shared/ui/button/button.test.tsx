import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
