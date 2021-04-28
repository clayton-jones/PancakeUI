import React from 'react';
import './header.scss';
export interface HeaderProps {
    user?: {
        name: string;
    };
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: React.FC<HeaderProps>;
