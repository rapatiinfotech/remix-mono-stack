import React from 'react';
import Header from './header';

interface Props {
    children: React.ReactNode;
}

export default function OnBoardLayout({ children }: Props) {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='mx-auto flex flex-1 flex-col items-center'>{children}</main>
        </div>
    );
}
