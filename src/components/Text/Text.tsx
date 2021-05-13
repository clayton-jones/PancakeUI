import React, {useState} from 'react';
import '../style/Text/text.scss';

export interface TextProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.BaseSyntheticEvent) => void
}

export const Text: React.FC<TextProps> = ({
    label = '',
    placeholder = '',
    onChange = (): void => {return},
    ...props
}) => {
    
    const [content, setContent] = useState('');

    const textChange = (e: React.BaseSyntheticEvent): void => {
        setContent(e.target.value);
    }
    
    const onFocus = (e: React.BaseSyntheticEvent): void => {
        e.target.placeholder = '';
    }

    const onBlur = (e: React.BaseSyntheticEvent): void => {
        e.target.placeholder = placeholder;
    }

    return (
        <div className='pancake-text-wrapper'>
            <label
                className={[
                    'pancake-label',
                     content ? 'up' : '',
                     placeholder && label ? 'up' : ''
                    ].join(' ')}
            >
                {label}
            </label>
            <div className="input-wrapper">
                <input
                    placeholder={placeholder}
                    className={['pancake-text'].join(' ')}
                    {...props}
                    onChange={(e: React.BaseSyntheticEvent): void => {
                        onChange(e);
                        textChange(e);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
    )
}