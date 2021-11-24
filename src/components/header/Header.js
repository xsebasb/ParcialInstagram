import React from 'react'
import Logo from './navbar/logo'
import Search from './navbar/search'
import IconosHeader from './navbar/iconosHeader'
const Header = () => {
    return (
        <header style={_stylesHeader.containerHeader}>
            <Logo></Logo>
            <Search></Search>
            <IconosHeader></IconosHeader>
        </header>
    )
}
export default Header;

const _stylesHeader = {
    containerHeader:{
        width: '100vw',
        height: '60px',
        background: '#fff',
        position: 'sticky',
        top: '0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid #dbdbdb',
        marginBottom: '30px',
        zIndex:'2000'

    },
};
