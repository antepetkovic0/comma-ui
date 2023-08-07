import { screen } from '@testing-library/react';

export function querySvgByRole() {
  return screen.getByRole('img');
}

export function queryAnchorByRole() {
  return screen.getByRole('link');
}
