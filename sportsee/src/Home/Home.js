import React from 'react';
import NavbarLeft from '../NavbarLeft/NavbarLeft';

class Home extends React.Component {
    render(){
        return(
            <section className="content">
                <NavbarLeft/>
                <div className="content-right">
                    toto
                </div>
            </section>
        )
    }
}

export default Home;