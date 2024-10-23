import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useEffect } from 'react';

function Navbar({ products, carts, setToken }) {
    const location = useLocation(); // ดึง URL ปัจจุบัน


    return (
        <div className='navbar-container'>

            <Link to={'/home'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/home' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Home
                </button>
            </Link>

            <Link to={'/calculator'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/calculator' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Calculator
                </button>
            </Link>

            <Link to={'/animation'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/animation' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Animation
                </button>
            </Link>

            <Link to={'/components'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/components' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Components
                </button>
            </Link>

            <Link to={'/todo'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/todo' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Todo
                </button>
            </Link>

            <Link to={'/products'}>
                <button
                    className={
                        'btn ' + (location.pathname === '/products' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Products ({products.length})
                </button>
            </Link>

            <Link to={'/carts'}>
                <button
                    className={
                        'position-relative btn ' + (location.pathname === '/carts' ? 'btn-primary' :
                            'btn btn-outline-primary')
                    }
                >
                    Carts
                    {carts.length > 0 && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span class="visually-hidden">unread messages</span>
                        </span>

                    )}
                </button>
            </Link>

            <button className='btn btn-outline-danger' style={{ marginLeft: '1rem' }}
                onClick={() => { setToken('') }}>

                Logout
            </button>

        </div>
    );
}

export default Navbar;
