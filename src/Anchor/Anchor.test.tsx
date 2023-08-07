import { render } from '@testing-library/react';
import { queryAnchorByRole, querySvgByRole } from '../utils/test-helpers';
import Anchor from '.';

describe('Anchor', () => {
  it('should render a default state', () => {
    const url = 'https://example.com';
    const children = 'Click me';
    const className = 'custom-class';

    render(
      <Anchor url={url} className={className}>
        {children}
      </Anchor>
    );

    const anchor = queryAnchorByRole();
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', url);
    expect(anchor).toHaveClass(className);
  });

  it('should render "_blank" and "noopener noreferrer" attributes when openInNewTab is true', () => {
    const url = 'https://example.com';
    const openInNewTab = true;

    render(
      <Anchor url={url} openInNewTab={openInNewTab}>
        Test anchor
      </Anchor>
    );

    const anchor = queryAnchorByRole();
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render external link icon when isExternal is true', () => {
    const url = 'https://example.com';
    const isExternal = true;

    render(
      <Anchor url={url} isExternal={isExternal}>
        Test anchor
      </Anchor>
    );

    const anchor = queryAnchorByRole();
    const icon = querySvgByRole();
    expect(anchor).toContainElement(icon);
  });
});
