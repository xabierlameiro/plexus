import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ classes, disabled = true, text, handler, icon, ...rest }) => {
    return (
        <button
            className={classes}
            onClick={handler}
            disabled={!disabled}
            {...rest}
        >
            {text}
            {icon}
        </button>
    )
}

Button.propTypes = {
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    handler: PropTypes.func,
    icon: PropTypes.node,
}

export default Button
