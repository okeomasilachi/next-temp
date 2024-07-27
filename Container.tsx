import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-full px-4 sm:px-6 lg:px-8 mx-auto
                         sm:max-w-container-sm
                         md:max-w-container-md
                         lg:max-w-container-lg
                         xl:max-w-container-xl
                         xxl:max-w-container-xxl
                         ${className}`}>
            {children}
        </div>
    );
};

export default Container;
