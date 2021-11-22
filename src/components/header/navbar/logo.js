import React from 'react'

const Logo = () => {
    return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" style={_styleslogo.containerLogo} alt=""/>
    )
}
export default Logo;

const _styleslogo = {
    containerLogo:{
        width: '120px',
        height: '50px',
        cursor: 'pointer',
    },
};
