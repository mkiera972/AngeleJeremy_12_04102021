import React, { Component } from "react";
import PropTypes from 'prop-types';
import CardActivity from "./CardActivity/CardActivity";
import ErrorData from "../ErrorData/ErrorData";

// ASSETS 
import calories from "../../assets/activityTracker/calories.png";
import protein from "../../assets/activityTracker/protein.png";
import carbohydrates from "../../assets/activityTracker/carbohydrates.png";
import lipids from "../../assets/activityTracker/lipids.png";

/**
 * @activityTracker COMPONENT activityTracker 
 * @param {object} props.activityTrackerData  - data activity Tracker
 * @return DISPLAY COMPONENT CardActivity
 */
class activityTracker extends Component {
    render() {
        return typeof this.props.activityTrackerData.calorieCount !== 'undefined' ? 
        (
            <div className="trackerActivity">
                <CardActivity icon={calories} dataActivity={this.props.activityTrackerData.calorieCount + "kCal"} title="Calories" classCard="trackerActivity-card-img redligth"/>
                <CardActivity icon={protein} dataActivity={this.props.activityTrackerData.proteinCount + "g"} title="Proteines" classCard="trackerActivity-card-img blueligth"/>
                <CardActivity icon={carbohydrates} dataActivity={this.props.activityTrackerData.carbohydrateCount + "g"} title="Glucides" classCard="trackerActivity-card-img yellowligth"/>
                <CardActivity icon={lipids} dataActivity={this.props.activityTrackerData.lipidCount + "g"} title="Lipides" classCard="trackerActivity-card-img rosaligth"/>
            </div>
        )
        :   
            <div className="trackerActivity errorData">
                <ErrorData msg="API USER TRACKER ACTIVITY, Erreur lors du chargement des donnees."/>
            </div>
            
    }
}

activityTracker.propTypes = {
    activityTrackerData : PropTypes.object.isRequired,
}

export default activityTracker;