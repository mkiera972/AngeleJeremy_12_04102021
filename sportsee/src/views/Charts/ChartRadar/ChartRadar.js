import React from 'react';
import API from '../../../API/api';
import ChartRadar from '../../../components/Charts/ChartRadar/ChartRadar';
import PropTypes from 'prop-types';
import ErrorData from '../../../components/ErrorData/ErrorData';

/**
 * @ChartRadarViews
 * @classdesc COMPONENT ChartRadarViews
 * GET DATA PERFORMANCE FROM API
 * DISPLAY DATA FROM COMPONENT CHARTRADAR
 */
class ChartRadarViews extends React.Component {
    /**
     * CONSTRUCTOR
     * @param {string} props - user id  
     * @return API DATA / STATE
     */
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
            if(response.length > 0){
                this.setState({
                    performanceAverageData: response,
                },() => { this.props.setClassError("errorChartRadar",false);});
            }else{
                this.props.setClassError("errorChartRadar",true);
            }
                
        });
    }

    render(){
        return this.state.performanceAverageData.length > 0 ?
        (
            <ChartRadar performanceAverageData={this.state.performanceAverageData} />
        )
        :
        (
            <ErrorData msg="API USER PERFORMANCE, Erreur lors du chargement des donnees."/>
        )
    }
}

ChartRadarViews.propTypes = {
    id : PropTypes.string.isRequired,
}

export default ChartRadarViews;