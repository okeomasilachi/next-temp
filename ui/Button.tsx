"use client";
import React, {ReactNode} from 'react';
import Link from 'next/link';

type ButtonProps = {
    type?: 'button' | 'link' | 'submit';
    color: 'pri' | 'sec' | 'gray' | 'suc' | 'inf';
    variant?: 'normal' | 'outline';
    href?: string;
    children: React.ReactNode;
    onClick?: (e: any) => void;
    onSubmit?: (e: any) => void;
    icon?: ReactNode;
    className?: string;
    size?: 'lg' | 'md' | 'sm';
    disable?: boolean;
};

const buttonStyles = {
    pri: {
        normal: 'bg-primary text-white hover:bg-primary-light',
        outline: 'border border-2 border-primary text-primary hover:bg-primary hover:text-secondary',
    },
    sec: {
        normal: 'bg-secondary text-white hover:bg-secondary-dark',
        outline: 'border border-2 dark:border-info dark:text-info border-secondary text-black hover:bg-secondary hover:text-white',
    },
    gray: {
        normal: 'bg-gray-900 text-gray-100 hover:bg-gray-700',
        outline: 'border border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100',
    },
    suc: {
        normal: 'bg-green-700 text-secondary hover:bg-green-900',
        outline: 'border border-2 border-green-700 text-secondary hover:bg-green-700 hover:text-secondary',
    },
    inf: {
        normal: 'bg-info text-black hover:bg-info-dark',
        outline: 'border border-2 border-info text-info hover:bg-info hover:text-black',
    },
};

const sizeStyles = {
    lg: 'mx-auto px-20 py-7 text-lg',
    md: 'mx-auto px-12 py-3 text-md',
    sm: 'mx-auto px-4 py-2 text-sm',
};

const Btn: React.FC<ButtonProps> = ({
                                           className,
                                           type = 'button',
                                           color,
                                           variant = 'normal',
                                           href,
                                           icon,
                                           children,
                                           onClick,
                                           onSubmit,
                                           size = 'md',
                                           disable,
                                       }) => {
    const defaultClass = `rounded transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl ${buttonStyles[color][variant]} ${sizeStyles[size]} ${className}`;

    const handleClick = (e: any) => {
        if (onClick) {
            onClick(e);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    };

    if (type === 'link' && href) {
        return (
            <span>
                <Link href={href} className={`${defaultClass} no-underline`}>
                    {children}
                    {icon && <>&nbsp; | &nbsp;{icon}</>}
                </Link>
            </span>
        );
    }

    return (
        <span>
            <button
                disabled={disable}
                type={type === 'submit' ? 'submit' : 'button'}
                className={defaultClass}
                onClick={handleClick}
                onSubmit={handleSubmit}
            >
                {children}
                {icon && <>&nbsp; | &nbsp;{icon}</>}
            </button>
        </span>
    );
};

export default Btn;
