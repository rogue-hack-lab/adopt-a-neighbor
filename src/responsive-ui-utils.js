import { layoutGenerator } from 'react-break';

export const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

export const OnMobile = layout.is('mobile');
export const OnAtLeastTablet = layout.isAtLeast('tablet');
export const OnAtMostPhablet = layout.isAtMost('phablet');
export const OnDesktop = layout.is('desktop');
