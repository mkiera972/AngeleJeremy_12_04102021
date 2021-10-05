import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render(){
        return(
            <nav className="navbar">
                <div className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <svg className="navbar-logo-icon-body" viewBox="0 0 52 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5346 18.422C39.8489 18.9293 40.4146 19.2463 41.0431 19.2463C41.3574 19.2463 41.6716 19.1829 41.9859 18.9927L50.5968 13.7931C51.4767 13.2858 51.7281 12.1445 51.2253 11.3201C50.7225 10.4324 49.5911 10.1788 48.774 10.686L41.6088 14.9979L38.1519 8.21307C37.2091 7.26192 36.1406 6.31078 35.0721 5.48645L24.827 0.28687C24.1356 -0.030178 23.3814 0.0332325 22.8157 0.540509L14.2677 8.33989C13.5134 9.03739 13.4506 10.1788 14.142 10.8763C14.8334 11.6372 15.9647 11.7006 16.6561 11.0031L24.387 4.02804L29.7295 6.75465L20.553 21.0852L-0.377096 46.0686C-1.19419 47.0197 -1.13133 48.5415 -0.125684 49.3659C0.817112 50.1902 2.32559 50.1268 3.14268 49.1122L23.4442 25.4605L32.1808 27.4896L26.2098 36.9376C25.5812 38.079 25.9584 39.474 27.0897 40.1081C28.0954 40.6788 29.4153 40.4251 30.1067 39.4106L37.7747 27.1725C38.2147 26.5384 38.2776 25.7141 38.0261 25.0166C37.7119 24.3191 37.1462 23.8118 36.392 23.685L29.6667 22.0998L35.7634 12.4615L39.5346 18.422Z" fill="#020203"/>
                        </svg>
                        <svg className="navbar-logo-icon-head" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.9174 10.423C7.55557 10.423 9.69423 8.26545 9.69423 5.60392C9.69423 2.94239 7.55557 0.78479 4.9174 0.78479C2.27922 0.78479 0.140564 2.94239 0.140564 5.60392C0.140564 8.26545 2.27922 10.423 4.9174 10.423Z" fill="#020203"/>
                        </svg>
                    </div>
                    <div className="navbar-logo-text">
                        SportSee
                    </div> 
                </div>
                <ul className="navbar-link">
                    <li className="navbar-link-item"> 
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="navbar-link-item"> 
                        <Link to="/about">Profil</Link>
                    </li>
                    <li className="navbar-link-item"> 
                        <Link to="/about">Réglage</Link>
                    </li>
                    <li className="navbar-link-item"> 
                        <Link to="/about">Communauté</Link>
                    </li>
                </ul>
          </nav>
        )
    }

}

export default Header;
