import '../styles/post.css'

export default function Post(props){
    return(
        <div className="post-container">
                <div className="post-top">
                    <img src={props.info.img} alt="" />
                    <div className="post-info">
                    <div className='post-name'>
                        <h4>{props.info.name}</h4>
                        <h6>{props.info.userName}</h6>
                                </div>
                                <p>{props.info.tweet}
                                </p>
                                </div>
                </div>
            <div className='post-icons'>
                <div className='comment'>
                    <img src="../../images/comment.svg" alt="" />
                    <p>{props.info.comments}</p>
                    </div>
                <div className='retweet'>
                    <img src="../../images/retweet.png" alt="" />
                    <p>{props.info.retweet}</p>
                    </div>
                <div className='heart'>
                    <img src="../../images/heart.svg" alt="" />
                    <p>{props.info.heart}</p>
                    </div>
                <div className='chart'>
                    <img src="../../images/chart.png" alt="" />
                    <p>{props.info.cahrt}</p>
                    </div>
                <div className='upload'>
                    <img src="../../images/upload.svg" alt="" />
                    </div>
            </div>
        </div>
    )
}