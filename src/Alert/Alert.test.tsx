import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Alert from '.';

describe('Alert', () => {
  it('should render a default state', () => {
    render(<Alert type="info">Test</Alert>);
    expect(screen.getByRole('alert')).toBeTruthy();
  });

  it('should render icon', () => {
    render(<Alert type="success">Test</Alert>);
    expect(screen.getByRole('presentation')).toBeTruthy();
  });

  it('should be able to access the native div', () => {
    const alertRef = createRef<HTMLDivElement>();
    render(
      <Alert ref={alertRef} type="info">
        Test
      </Alert>
    );
    expect(screen.getByRole('alert')).toEqual(alertRef.current);
  });
});
