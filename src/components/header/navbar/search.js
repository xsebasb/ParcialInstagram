import React from 'react';
import {FormControl} from 'react-bootstrap';
const Search = () => {
    
    const _stylesSearch = {
    inputTextSearch: {
        width:'23%',
        height: '50%',
        background: '#fafafa',
        color:'#000',
        border: '1px solid #dbdbdb',
        outline: '',
    },
};

    return (
        <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            style={_stylesSearch.inputTextSearch}
        />

    )
};
export default Search;

