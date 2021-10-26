import React from 'react';
import API from '../../API/api'
import ChartBarViews from './ChartBar/ChartBar'
import ChartRadarViews from './ChartRadar/ChartRadar';
import ChartLineViews from './ChartLine/ChartLine';
import ChartPieViews from './ChartPie/ChartPie';
import ActivityTracker from '../../components/ActivityTracker/ActivityTracker';
class Charts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            firstName : "",
            goalScorePercentage : 0,
            goalScoreData : [],
            activityTrackerData : {},
            
        }
        this.apiProvider = new API();
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
                <div className="charts">
                    <div className="charts-bar">
                        <ChartBarViews id={this.state.id} />
                    </div>
                    <div className="charts-graph">
                        <div className="charts-graph-sessions">
                            <ChartLineViews id={this.state.id} />
                        </div>
                        <div className="charts-graph-perf">
                            <ChartRadarViews id={this.state.id} />
                        </div>
                        <div className="charts-graph-scores">
                            <ChartPieViews goalScoreData={this.state.goalScoreData} goalScorePercentage={this.state.goalScorePercentage} />
                        </div>
                    </div>  
                </div>
                
                <ActivityTracker activityTrackerData={this.state.activityTrackerData}  />
                
            </React.Fragment>
            
        )
    }
}

export default Charts;