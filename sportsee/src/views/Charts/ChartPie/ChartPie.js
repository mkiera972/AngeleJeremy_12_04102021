import ChartPie from '../../../components/Charts/ChartPie/ChartPie';
import ErrorData from '../../../components/ErrorData/ErrorData';
import PropTypes from 'prop-types';
import React from "react";
/**
 * @ChartPieViews
 * @classdesc COMPONENT ChartPieViews
 * GET DATA GOALSCORE FROM API
 * DISPLAY DATA FROM COMPONENT CHARTPIE
 */
class ChartPieViews extends React.Component {
    render() {
        return this.props.goalScoreData.length > 0 ?
        (
            <React.Fragment>
                <h2 className="charts-graph-scores-title">Score</h2>
                <ChartPie goalScoreData={this.props.goalScoreData} />
                {this.getPieChartInfos()}
            </React.Fragment>
        )
        :
        (
            <ErrorData msg="API USER GOALSCORE, Erreur lors du chargement des donnees."/>
        )
    }

    /**
     * getPieChartInfos
     * Build Pie Chart Infos
     * @return HTML PIE INFOS
     */
    getPieChartInfos = () => {
        return (
            <div className="charts-graph-scores-infos">
                <span className="charts-graph-scores-value">{this.props.goalScorePercentage}%</span>
                <span className ="block grey">de votre</span>
                <span className ="block grey">objectif</span>
            </div>
        )
    }
}

ChartPieViews.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
    goalScorePercentage : PropTypes.number.isRequired,
}

export default ChartPieViews;