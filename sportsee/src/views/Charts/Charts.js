import React from 'react';
import API from '../../API/api';
import PropTypes from 'prop-types';
import ChartBarViews from './ChartBar/ChartBar'
import ChartRadarViews from './ChartRadar/ChartRadar';
import ChartLineViews from './ChartLine/ChartLine';
import ChartPieViews from './ChartPie/ChartPie';
import ActivityTracker from '../../components/ActivityTracker/ActivityTracker';
/**
 * @Charts
 * @classdesc DISPLAY ALL DATA FROM COMPONENTS
 * ChartBarViews
 * ChartRadarViews
 * ChartLineViews
 * ChartPieViews
 * ActivityTracker
 */
class Charts extends React.Component {
    /**
     * CONSTRUCTOR
     * @param {string} props - user id  
     * @return API DATA / STATE / BIND CLASS ERROR
     */
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            firstName : "",
            goalScorePercentage : 0,
            goalScoreData : [],
            activityTrackerData : {},
            errorChartBar : false, 
            errorChartLine : false,
            errorChartRadar : false,
            errorChartPie : false,
            
        }
        this.apiProvider = new API();
        this.setClassError = this.setClassError.bind(this);
    }

    /**
     * 
     * @param {string} error name error exemp errorChartRadar
     * @param {boolean} isError return true or false
     */
    setClassError(error, isError){

        switch (error) {
            case "errorChartRadar":
                this.setState({
                    errorChartRadar : isError,
                });
            break;

            case "errorChartBar":
                this.setState({
                    errorChartBar : isError,
                });
            break;


            case "errorChartLine":
                this.setState({
                    errorChartLine : isError,
                });
            break;

            case "errorChartPie":
                this.setState({
                    errorChartPie : isError,
                });
            break;

            default:
            break;
        
        }

    }


    componentDidMount = () => {
        this.apiProvider
        .getData(this.state.id)
        .then((response) => {
            this.setState({
                firstName : response.firstName,
                goalScoreData: [
                    { name: "completed", value: response.userScore, fillColor: "#e60000" },
                    { name: "not-completed", value: 1 - response.userScore, fillColor: "transparent" },
                ],
                goalScorePercentage : response.userScore * 100,
                activityTrackerData : response.activityTracker,
            });
        })
        .catch((error) => {
            this.setState({
                message : error.message,
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="userInfos">
                    <h1 className="userInfos-username">Bonjour <span className="red">{this.state.firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="charts">
                    <div className={this.state.errorChartBar ? "charts-bar errorChart" : "charts-bar"}>
                        <ChartBarViews id={this.state.id} setClassError={this.setClassError}/>
                    </div>
                    <div className="charts-graph">
                        <div className={this.state.errorChartLine ? "charts-graph-sessions errorChart" : "charts-graph-sessions"}>
                            <ChartLineViews id={this.state.id} setClassError={this.setClassError}/>
                        </div>
                        <div className={this.state.errorChartRadar ? "charts-graph-perf errorChart" : "charts-graph-perf"}>
                            <ChartRadarViews id={this.state.id} setClassError={this.setClassError}/>
                        </div>
                        <div className={this.state.errorChartRadar ? "charts-graph-scores errorChart" : "charts-graph-scores"}>
                            <ChartPieViews goalScoreData={this.state.goalScoreData} goalScorePercentage={this.state.goalScorePercentage} setClassError={this.setClassError}/>
                        </div>
                    </div>  
                </div>
                <ActivityTracker activityTrackerData={this.state.activityTrackerData}/>
            </React.Fragment>
            
        )
    }
}

Charts.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Charts;