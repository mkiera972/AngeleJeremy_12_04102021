import React, { Component } from "react";
import PropTypes from 'prop-types';

// ASSETS 
import calories from "../../assets/activityTracker/calories.png"

class activityTracker extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="trackerActivity">
                <div className="trackerActivity-card">
                    <div className="trackerActivity-card-img redligth">
                        <img src={calories} />
                    </div>
                    <div className="trackerActivity-card-infos">
                        <span className="trackerActivity-card-infos-activity">{this.props.activityTrackerData.calorieCount}kCal</span>
                        <span className="trackerActivity-card-infos-activityTitle">Calories</span>
                    </div>
                </div>
            </div>
        )
    }
}

activityTracker.propTypes = {
    activityTrackerData : PropTypes.object,
}

export default activityTracker;