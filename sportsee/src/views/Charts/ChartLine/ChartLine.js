import React from 'react';
import API from '../../../API/api';
import ChartLine from '../../../components/Charts/ChartLine/ChartLine';
class ChartLineViews extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            userAverageData : [],
        }
        this.apiProvider = new API();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserAverageSessionData(this.state.id)
        .then((response) => {
            this.setState({
                userAverageData: response,
            });
        });
    }

    render(){
        return(
            <ChartLine userAverageData = {this.state.userAverageData} />
        )
    }
}

export default ChartLineViews;