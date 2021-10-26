import PropTypes from "prop-types";
import React from 'react';

class TooltipBarChart extends React.Component {
    render() {
        const { payload, active } = this.props;

        if (active && payload) {
            return (
                <div className="tooltipContainer">
                    <p className="tooltipLine red">
                        {`${payload[0].value} kg`}
                    </p>
                    <p className="tooltipLine red">
                        {`${payload[1].value} kCal`}
                    </p>
                </div>
        );
    }
        return null;
    }
}

TooltipBarChart.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
};

export default TooltipBarChart;