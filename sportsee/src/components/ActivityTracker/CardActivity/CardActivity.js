import React, { Component } from "react";
import PropTypes from 'prop-types';

/**
 * DISPLAY COMPONENT CARD
 */
class CardActivity extends Component {
    render() {
        return (
            <div className="trackerActivity-card">
                <div className={this.props.classCard}>
                    <img src={this.props.icon} alt="" />
                </div>
                <div className="trackerActivity-card-infos">
                    <span className="trackerActivity-card-infos-activity">{this.props.dataActivity}</span>
                    <span className="trackerActivity-card-infos-activityTitle">{this.props.title}</span>
                </div>
            </div>
         
        )
    }
}

CardActivity.propTypes = {
    icon : PropTypes.string.isRequired,
    dataActivity : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}
export default CardActivity;