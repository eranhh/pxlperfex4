// import logo from '../assets/imgs/logo.svg'
import { Link } from 'react-router-dom'

export function AppHeader() {

    return (
        <header className="app-header">
            <div className="header-content flex j-between main-layout a-center">
                <div className="logo a-center"><Link to="/">Logo</Link></div>
                {/* <div className="logo"><Link to="/"><img src={logo} alt=""/></Link></div> */}
                <nav>
                    <ul className="nav-sect flex clean-list">
                        <li><Link to="/">Link 1</Link></li>
                        <li><Link to="/">Link 2</Link></li>
                        <li><Link to="/">Link 3</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
