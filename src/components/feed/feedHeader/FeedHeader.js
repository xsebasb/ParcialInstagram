import React, { useState } from 'react';
import {AiOutlineEllipsis} from "react-icons/ai";
const FeedHeader = () => {
    const [underlineState, setunderlineState] = useState("");
    const _stylesFeedHeader = {
        containerFeedHeader:{
        width: '100%',
        height: '80px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        },
        containerLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        margin:'0',
        marginLeft: '20px',
        padding:'0',
        },
        story:{
            border:'0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            margin:'0',
        },
        profile:{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
  
            background: 'linear-gradient(36deg, rgb(255,201,0) 13%,rgb(255,0,95)73%, rgb(255,9,237)100%)',
            boxSizing: 'border-box',
            width:'50px',
            height: '50px',
            borderRadius:'50%',
    
        },
        img:{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            padding: '0',
            margin: '0',
            border: 'solid 2px white',
        },
        title:{
            margin: '0',
            padding: '0',
            textDecoration: `${underlineState}`,
            cursor: 'pointer',
            color: '#5e5e5e',
            fontWeight: '600',
            fontSize: '15px'
        },
        styleEllipsis:{
            margin: '0',
            padding: '0',
            fontSize: '25px',
            marginRight: '20px',
            cursor: 'pointer',
            color: '#4b4b4b'
        }
    };
    return (
        <div style={_stylesFeedHeader.containerFeedHeader}>
            <div style={_stylesFeedHeader.containerLeft}>
                <div style={_stylesFeedHeader.story}>
                        <div style={_stylesFeedHeader.profile}>
                            <img src="https://picsum.photos/66/73" alt="" style={_stylesFeedHeader.img}/>
                        </div>
                </div>
            <p style={_stylesFeedHeader.title}
            onMouseEnter={() => setunderlineState("underline")}
            onMouseLeave={() => setunderlineState("")}
            >Andrew02</p>
            </div>
            <AiOutlineEllipsis style={_stylesFeedHeader.styleEllipsis}/>
        </div>
    )
}

export default FeedHeader;
