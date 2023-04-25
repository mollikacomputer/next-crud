import Link from "next/link";
import React from "react";
const Header = () => {
    return (
        <div>
            <Link href='/' > Home</Link>
            <Link href='/products' > Product</Link>
            <Link href='/comments' > Comments</Link>
            <Link href='/pets' > Image Galary</Link>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
};

export default Header;