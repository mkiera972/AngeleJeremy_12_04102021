import React from 'react';
import API from '../../../API/api';
import ChartBar from '../../../components/Charts/ChartBar/ChartBar';
import ErrorData from '../../../components/ErrorData/ErrorData';
import PropTypes from 'prop-types';

/**
 * @ChartBarViews
 * @classdesc COMPONENT ChartBarViews
 * GET DATA DAYLYACTIVITY FROM API
 * DISPLAY DATA FROM COMPONENT CHARTBAR
 */
class ChartBarViews extends React.Component {
    /**
     * CONSTRUCTOR
     * @param {string} props - user id  
     * @return API DATA / STATE
     */
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
            if(response.data){
                this.setState({
                    dailyActivityData: response.data,
                },() => { this.props.setClassError("errorChartBar",false);});
                
            }else{
                this.props.setClassError("errorChartBar",true);
            }
        });
    }

    render(){
        return this.state.dailyActivityData.length > 0 ?
        (
            <ChartBar dailyActivityData={this.state.dailyActivityData}/>
        )
        :
        (
            <ErrorData msg="API USER ACTIVITY, Erreur lors du chargement des donnees."/>
        )
    }
}

ChartBarViews.propTypes = {
    id : PropTypes.string.isRequired,
}

export default ChartBarViews;