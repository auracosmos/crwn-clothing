import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleIn,...otherProps }) => (
    <button className={`${isGoogleIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton