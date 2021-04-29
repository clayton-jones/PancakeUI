import React from 'react';
import '../style/Button/button.scss';

export interface ButtonProps {
  /**
   * Type of button:
   *  -'primary'
   *  -'secondary'
   *  -'affirmative'
   *  -'error'
   */
  mode?: string;
  /**
   * Secondary button color
   */
  secondary?: boolean;

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
export const Button: React.FC<ButtonProps> = ({
  mode = '',
  size = 'medium',
  label = '',
  rounded = true,
  onClick = () => null,
  ...props
}) => {
  
  const round = !rounded ? 'square' : '';
  
  return (
    <button
      type="button"
      className={['pancake-btn', `${size}`, mode, round].join(' ')}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
