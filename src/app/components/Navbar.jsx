
import Navlink from "./Navlink";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
]
const Navbar = () => {
    return (
        <div className="flex bg-blue-200 justify-between p-10 rounded-br-full">
            <h1>Next Hero Logo</h1>
            <ul className="flex gap-4">
                {
                    navLinks.map(({ path, title }) => <li key={path}>
                        <Navlink
                            exact={path === '/'}
                            activeClassName="text-red-500"
                            href={path}
                        >
                            {title}
                        </Navlink>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;