'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation';
import myClassName from "../utils/myClassName";


const Navlink = ({children, exact=false, href, activeClassName, ...props}) => {
    const path = usePathname();
    const active = exact? path === href : path.startsWith(href);
    const classes = myClassName(props.className, active && activeClassName);
    
    if(classes){
        props.className = classes;
    }

    return (
        <div>
            <Link href={href} {...props}>
            {children}
            </Link>
        </div>
    );
};

export default Navlink;