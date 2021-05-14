import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Text} from '../components/Text/Text';

test('renders text element', () => {
    render(<Text label='test'/>);
    const input = screen.getByLabelText(/test/i);
    expect(input).toBeInTheDocument();
});

test('hides/shows placeholder on focus/blur', () => {
    render(<Text label='test' placeholder='email'/>);

    // find text input with given placeholder
    const input = screen.getByPlaceholderText('email');
    
    // focusing the input should remove the placeholder value
    fireEvent.focus(input);

    // find text input with empty placeholder
    const empty = screen.getByPlaceholderText(/^$/i);

    expect(empty).toBeInTheDocument();

    fireEvent.blur(empty);

    const hasPlaceholder = screen.getByPlaceholderText('email');
    expect(hasPlaceholder).toBeInTheDocument();
});

test('keeps label up with text input via "up" class', () => {
    render(<Text label='test' placeholder='email'/>);

    // find text input with given placeholder
    const input = screen.getByPlaceholderText(/email/i);
    
    fireEvent.input(input, { target: { value: 'testing' } });

    const label = screen.getByTestId('pancake-label-testid');
    expect(label).toHaveClass('up');
});