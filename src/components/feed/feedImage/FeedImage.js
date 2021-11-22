import React from 'react'

const FeedImage = () => {
    return (
        <div style={_stylesFeedImage.containerFeedImage}>
            <img src="https://picsum.photos/636/330" style={_stylesFeedImage.feedImage}alt=""/>
        </div>
    )
}
export default FeedImage;
const _stylesFeedImage= {
    containerFeedImage:{
    width: '100%', height: '330px',
    },
};