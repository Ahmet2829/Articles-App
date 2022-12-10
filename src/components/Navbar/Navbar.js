import { Navigate, useNavigate } from 'react-router';
import './Navbar.css';




const Navbar = () => {

    const navigate = useNavigate();
    return (







        <nav class="navbar navbar-expand-lg bg-light navMain">
            <div class="container-fluid">
                <div class="navbar-brand" href="#"><div className='Article'>Articles</div></div>
                <div class="navDrop">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <div class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/ArticlesPage">Articles</a></li>
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