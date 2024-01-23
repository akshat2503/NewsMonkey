import React  from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date } = props;

        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/dawood-ibrahim-182912501-16x9_0.jpeg?VersionId=PoUcJwg.H3c6uJqkz6vQrUDB5B15n.MI"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By <i>{author ? author : "Unknown"}</i> on <i>{new Date(date).toGMTString()}</i></small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
