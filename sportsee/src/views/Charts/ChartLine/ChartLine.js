import React from 'react';
import API from '../../../API/api';
import ChartLine from '../../../components/Charts/ChartLine/ChartLine';
import PropTypes from 'prop-types';
import ErrorData from '../../../components/ErrorData/ErrorData';
/**
 * @ChartLineViews
 * @classdesc GET DATA USER AVERAGE SESSION FROM API 
 * DISPLAY DATA FROM COMPONENT CHARTLINE
 */
class ChartLineViews extends React.Component {
    /**
     * CONSTRUCTOR
     * @param {string} props - user id  
     * @return API DATA / STATE
     */
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
            if(response.length > 0){
                this.setState({
                    userAverageData: response,
                },() => { this.props.setClassError("errorChartLine",false);});
            }else{
                this.props.setClassError("errorChartLine",true);
            }
        });
    }

    render(){
        return this.state.userAverageData.length > 0 ?
        (
            <React.Fragment>
                <h2 className="charts-graph-sessions-title">Durée moyenne des sessions</h2>
                <ChartLine userAverageData = {this.state.userAverageData} />
            </React.Fragment>
        )
        :
        (
            <ErrorData msg="API USER SESSION, Erreur lors du chargement des donnees."/>
        )
    }
}

ChartLineViews.propTypes = {
    id : PropTypes.string.isRequired,
}
export default ChartLineViews;