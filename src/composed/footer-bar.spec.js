import React from 'react';
import renderer from 'react-test-renderer';
import FooterBar from './footer-bar';

describe('Test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: false,
          media: jest.fn(),
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
      }),
    });
  });
  it('renders correctly', () => {
    const tree = renderer.create(<FooterBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
