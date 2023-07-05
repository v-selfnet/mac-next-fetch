
import Navlink from "./Navlink";

const sideLinks = [
    {
        path: '/dashboard',
        title: 'User Home'
    },
    {
        path: '/dashboard/additem',
        title: 'Add Item'
    },
    {
        path: '/dashboard/manageitem',
        title: 'Manage Item'
    },
    {
        path: '/',
        title: 'Home'
    },
]

const Sidebar = () => {
    return (
        <div className="bg-slate-200 p-10 h-[100vh]">
            <h1>Welcome to Dashboard</h1>
            <div className="divider"></div>

            <ul>
                {
                    sideLinks.map(({path, title}) => <li key={path}>
                        <Navlink exact={path === '/' || path === '/dashboard'}
                            activeClassName="text-red-500"
                            href={path}>{title}</Navlink>
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Sidebar;