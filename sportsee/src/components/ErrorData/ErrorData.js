import React from 'react';
import PropTypes from "prop-types";
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