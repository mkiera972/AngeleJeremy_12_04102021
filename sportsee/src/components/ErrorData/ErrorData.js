import React from 'react';
import PropTypes from "prop-types";
/**
 * @ErrorData
 * @classdesc COMPONENT ErrorData 
 * DISPLAY MSG ERROR IF API NOT WORKING
 * @param {string} props.msg  - error message
 * @return DISPLAY MSG ERROR IF API NOT WORKING
 */
class ErrorData extends React.Component {
    render() {
            return (
                <div className="noData">
                    <p className="red">
                        {this.props.msg}
                    </p>
                </div>
        );
    }
}

ErrorData.propTypes = {
    msg: PropTypes.string,
};

export default ErrorData;