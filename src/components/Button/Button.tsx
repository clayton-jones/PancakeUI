import React from 'react';
import '../style/Button/button.scss';

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

  gradient?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label = '',
  backgroundColor = 'blue',
  gradient = false,
  colorPrimary = '#085f70',
  colorSecondary = '#003cb5',
  rounded = true,
  onClick = () => null,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary';
  const round = !rounded ? 'square' : '';
  const backgroundImage = gradient ? `linear-gradient(45deg, ${colorPrimary} 0%, ${colorSecondary} 100%)` : '';
  
  return (
    <button
      type="button"
      className={['pancake-btn', `${size}`, mode, round].join(' ')}
      style={{ backgroundColor, backgroundImage }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
