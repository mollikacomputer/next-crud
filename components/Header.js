import Link from "next/link";
import React from "react";
const Header = () => {
    return (
        <div>
            <Link href='/' > Home</Link>
            <Link href='/products' > Product</Link>
            <Link href='/posts' > posts</Link>
            <Link href='/services' > Service </Link>
            <Link href='/comments' > Comment </Link>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
};

export default Header;