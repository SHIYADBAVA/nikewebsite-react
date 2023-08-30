
// Navbar component
const Navbar = () =>{
    return (<nav className="container">
        {/* Logo of Brand */}
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        {/* Navbar list of options */}
        <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>

        </ul>

        {/* Login button */}
        <button>Login</button>
    </nav>)
}

export default Navbar;