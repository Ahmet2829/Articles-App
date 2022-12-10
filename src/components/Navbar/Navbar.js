import { Navigate, useNavigate } from 'react-router';
import './Navbar.css';




const Navbar = () => {

    const navigate = useNavigate();
    return (







        <nav className="navbar navbar-expand-lg bg-light navMain">
            <div className="container-fluid">
                <div className="navbar-brand" href="#"><div className='Article'>Articles</div></div>
                <div className="navDrop">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/ArticlesPage">Articles</a></li>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar