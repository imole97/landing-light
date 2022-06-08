import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import profileImg from '../../assets/profileImg.png'
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"

const Navigation = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link' to='#'>TRIPS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='#'>RECENTLY VIEWED</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='#'>BOOKINGS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='#'>
                                <img src={profileImg} alt='' width= '40' height='40' className="d-inline-block align-text-top logo"/>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation