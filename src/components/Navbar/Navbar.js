import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light navMain">
            <div class="container-fluid">
                <div class="navbar-brand" href="#"><div className='Article'>Articles</div></div>
                <div class="navDrop">
                    <input type="checkbox"/>
                        <span></span>
                        <span></span>
                        <div class="menu">
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">cursos</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contactos</a></li>
                        </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar