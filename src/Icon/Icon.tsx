import { useMemo } from 'react';
import {
  ErrorSvg,
  ExternalLinkSvg,
  InfoSvg,
  // NubbinSvg,
  SuccessSvg,
  WarningSvg,
} from '../icons';
import warning from '../utils/warning';

type IconName = 'info' | 'success' | 'warning' | 'error' | 'external-link';

export type IconProps = {
  name: IconName;
};

const Icon = ({ name }: IconProps): JSX.Element | null => {
  const icon = useMemo(() => {
    switch (name) {
      case 'success':
        return <SuccessSvg />;
      case 'info':
        return <InfoSvg />;
      case 'warning':
        return <WarningSvg />;
      case 'error':
        return <ErrorSvg />;
      case 'external-link':
        return <ExternalLinkSvg />;
      default:
        return null;
    }
  }, [name]);

  if (!icon) {
    warning('Icon', 'Unknown icon name.');
  }

  return icon;
};

export default Icon;
