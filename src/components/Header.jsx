import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



const Header = ({ mode, handleOnMode }) => {
    return <header className={`p-3 text-bg-${mode}`}>
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className={`nav-link px-2 ${mode === "light" ? "text-dark" : "text-light"}`}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link px-2 ${mode === "light" ? "text-dark" : "text-light"}`}>About Us</Link></li>
                </ul>
                <div className="text-end">
                    <div className="form-check form-switch">
                        <input className='form-check-input' onClick={handleOnMode} type='checkbox' role='switch' id='switch' />
                        <label className='form-check-label' htmlFor='flex'>{mode ==="dark"? "Enable Light Mode": "Enable Dark Mode"}</label>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

Header.propTypes = {
    mode: PropTypes.string,
    handleOnMode: PropTypes.func,
}

export default Header;