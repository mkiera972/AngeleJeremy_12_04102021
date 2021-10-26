import React from 'react';
import NavbarLeft from '../../NavbarLeft/NavbarLeft';
import Charts from '../../views/Charts/Charts';
class Dashboard extends React.Component {
    render(){
        return(
            <section className="content">
                <NavbarLeft/>
                <div className="content-right">
                    <Charts id={this.props.id} />
                </div>
            </section>
        )
    }
}


export default Dashboard;