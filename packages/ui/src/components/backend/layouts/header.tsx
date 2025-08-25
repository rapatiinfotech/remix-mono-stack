import { Button } from '../../shadcn/button';
import { Link } from 'react-router';

export default function Header() {
    return (
        <header className='bg-background text-foreground sticky top-0 z-50 w-full px-6 py-4'>
            <div className='mx-auto flex items-center justify-between'>
                <div className='text-xl font-bold'>Backend - Remix mono Stack</div>

                <nav className='flex space-x-6'>
                    {/* <Link
                        to="/"
                        className="px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Home
                    </Link> */}
                    <Button asChild>
                        <Link
                            to='/contact'
                            className='rounded px-4 py-2 transition-colors hover:bg-blue-600'
                        >
                            Support
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link
                            to='/login'
                            className='rounded px-4 py-2 transition-colors hover:bg-blue-600'
                        >
                            Login
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link
                            to='/signup'
                            className='rounded px-4 py-2 transition-colors hover:bg-blue-600'
                        >
                            SignUp
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
