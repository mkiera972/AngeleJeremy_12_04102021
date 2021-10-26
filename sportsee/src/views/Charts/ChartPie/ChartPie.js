import ChartPie from '../../../components/Charts/ChartPie/ChartPie';
import PropTypes from 'prop-types';
import React, { Component } from "react";

class ChartPieViews extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="charts-graph-scores-title">Score</h2>
                <ChartPie goalScoreData={this.props.goalScoreData} />
                {this.getPieChartInfos()}
            </React.Fragment>
        )
    }

    // Build Pie Chart Infos
    getPieChartInfos = () => {
        return (
            <div className="charts-graph-scores-infos">
                <span className="harts-graph-scores-value">{this.props.goalScorePercentage} %</span>
                <span className ="block"/>
                de votre
                <span className ="block"/>
                objectif
            </div>
        )
    }
}

ChartPieViews.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
    goalScorePercentage : PropTypes.number.isRequired,
}

export default ChartPieViews;