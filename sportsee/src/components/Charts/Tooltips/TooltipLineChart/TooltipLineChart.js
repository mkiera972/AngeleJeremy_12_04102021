import PropTypes from "prop-types";
import React, { Component } from "react";
/**
 * @TooltipLineChart
 * @classdesc COMPONENT TooltipLineChart 
 * DISPLAY INFOS TOPLINE CHARTLINE
 */
class TooltipLineChart extends Component {
    render() {
        const { payload, active } = this.props;
        if (active && payload) {
            return <p className="graphscorestooltipLineChart">{`${payload[0].value} min`}</p>;
        }
        return null;
    }
}

TooltipLineChart.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};

export default TooltipLineChart;