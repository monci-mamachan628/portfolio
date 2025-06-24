import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { href } from 'react-router-dom';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    {name: "Timeline", href:"#Timeline"},
    { name: 'Skills', href: ' #skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];
// Remove the invalid useState above and move it inside the component
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState(navItems[0].href);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

        


    return (<nav className={cn('fixed w-full z-40 transition-all duration-300', 
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'

    )}
    >
        <div className = 'container flex items-center justify-between' >
        <a className='text-xl font-bold text-primary flex items-center '
        href='#hero'>
            <span className='relative z-10'>
             <span className='text-glow text-foreground'>Monci</span>
                <span className="text-purple-800"> Portfolio</span>
  </span>
</a>

{/* desktop navigation */}

<div className='hidden md:flex space-x-8'>
    {navItems.map((item, key) => (
        <a 
            key={key}
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            className={
                cn(
                    'text-foreground/80 hover:text-foreground transition-colors duration-300',
                    activeNav === item.href && 'text-purple-500' // or 'text-primary'
                )
            }
        >
            {item.name}
        </a>
    ))}
</div>

{/* mobile navigation */}
<button
    onClick={() => setIsMenuOpen(prev => !prev)}
    className='md:hidden p-2 text-foreground z-50 '
    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
>
    {isMenuOpen ?<X size={24} /> : <Menu size={24} />} {''}
</button>

<div className={cn(
    'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
    'transition-all duration-300 md:hidden',
    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
)}>
    <div className='flex flex-col space-y-8 text-xl'>
     {navItems.map((item, key) => (
        <a 
            key={key}
            href={item.href}
            onClick={() => {
                setActiveNav(item.href);
                setIsMenuOpen(false); // Close menu on click
            }}
            className={
                cn(
                    'text-foreground/80 hover:text-foreground transition-colors duration-300',
                    activeNav === item.href && 'text-purple-500' // or 'text-primary'
                )
            }
        >
            {item.name}
        </a>
    ))}
    </div>
</div>
</div>
    </nav>
);
};

        