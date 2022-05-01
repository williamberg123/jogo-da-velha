import React from 'react';
import { screen, render } from '@testing-library/react';
import ScoreInfoItem from './ScoreInfoItem';

describe('<ScoreInfoItem />', () => {
    it('should render element correctly', () => {
        const {debug} = render(<ScoreInfoItem whoArePlaying="cross" score={10} imageRoot="img/img.jpg" />);
        // debug();

        expect(screen.getByText('Sua vez')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'img' })).toBeInTheDocument();
        expect(screen.getByText(/10/)).toBeInTheDocument();
    });

    it('should to have class cross when whoArePlaying is cross', () => {
        render(<ScoreInfoItem whoArePlaying="cross" score={5} imageRoot="img/img.jpg" />);

        expect(screen.getByText('Sua vez').parentElement).toHaveClass('cross');
    });

    it('should match snapshot', () => {
        render(<ScoreInfoItem whoArePlaying="cross" score={10} imageRoot="img/img.jpg" />);

        expect(screen.getByText('Sua vez').parentElement).toMatchSnapshot();
    });
});
