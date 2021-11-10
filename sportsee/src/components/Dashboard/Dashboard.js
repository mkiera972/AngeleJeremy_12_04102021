import React from 'react';
import NavbarLeft from '../../NavbarLeft/NavbarLeft';
import Charts from '../../views/Charts/Charts';
import PropTypes from "prop-types";
/**
 * @Dashboard
 * @classdesc COMPONENT Dashboard 
 * @param {string} props.id  - id user
 * @return DISPLAY ALL CHARTS AND ACTIVITY TRACKER
 */
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
Dashboard.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Dashboard;