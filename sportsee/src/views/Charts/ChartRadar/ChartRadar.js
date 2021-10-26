import React from 'react';
import API from '../../../API/api';
import ChartRadar from '../../../components/Charts/ChartRadar/ChartRadar';
class ChartRadarViews extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            performanceAverageData : []
        }
        this.apiProvider = new API();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserPerformanceData(this.state.id)
        .then((response) => {
            this.setState({
                performanceAverageData: response,
            });
        });
    }

    render(){
        return(
            <ChartRadar performanceAverageData={this.state.performanceAverageData} />
        )
    }
}

export default ChartRadarViews;