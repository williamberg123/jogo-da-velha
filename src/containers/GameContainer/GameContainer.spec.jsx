import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import GameContainer from './GameContainer';

describe('<GameContainer />', () => {
    it('should render element correctly', () => {
        const fn = jest.fn();
        const {debug} = render(<GameContainer handleClick={fn} />);
        // debug();

        expect(screen.getAllByTestId('Square')).toHaveLength(9);
    });

    it('should call function when Square is clicked', () => {
        const fn = jest.fn();
        render(<GameContainer handleClick={fn} />);

        fireEvent.click(screen.getAllByTestId('Square')[0]);

        expect(fn).toBeCalledTimes(1);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        render(<GameContainer handleClick={fn} />);

        expect(screen.getAllByTestId('Square')[0].parentElement).toMatchSnapshot()
    });
});
