import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Square from './Square';

describe('<Square />', () => {
    it('should call function when div is clicked', () => {
        const fn = jest.fn();
        render(<Square funcHandleClick={fn} index={1} />);

        fireEvent.click(screen.getByTestId('Square'));

        expect(fn).toBeCalled();
    });

    it('should to have the class Square1', () => {
        const fn = jest.fn();
        render(<Square funcHandleClick={fn} index={1} />);

        expect(screen.getByTestId('Square')).toHaveClass('Square1');
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        render(<Square funcHandleClick={fn} index={1} />);

        expect(screen.getByTestId('Square')).toMatchSnapshot();
    });
});
