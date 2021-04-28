import React from 'react';
import './button.scss';
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * primary color to use in color gradient
     */
    colorPrimary?: string;
    /**
     * secondary color to use in color gradient
     */
    colorSecondary?: string;
    /**
     * background color
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Does the button have rounded corners?
     */
    rounded?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.FC<ButtonProps>;
