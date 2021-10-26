import React from 'react';
import API from '../../../API/api';
import ChartBar from '../../../components/Charts/ChartBar/ChartBar';
class ChartBarViews extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            dailyActivityData : [],
        }
        this.apiProvider = new API();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserDailyActivityData(this.state.id)
        .then((response) => {
            this.setState({
                dailyActivityData: response.data,
            });
        });
    }

    render(){
        return(
          <ChartBar dailyActivityData={this.state.dailyActivityData}/>
        )
    }
}

export default ChartBarViews;