import React from 'react';
import { screen, render } from '@testing-library/react';
import Image from './Image';

describe('<Image />', () => {
    it('should render Image correctly', () => {
        render(<Image imageRoot="./img/img.png" />);

        expect(screen.getByRole('img', { name: /img/i })).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        render(<Image imageRoot="./img/img.png" />);

        expect(screen.getByRole('img', { name: /img/i })).toMatchSnapshot();
    });
});
