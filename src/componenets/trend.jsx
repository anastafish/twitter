import '../styles/right-sidebar.css'


export default function TrendItem(props){
    return(
        <div className="trenditem-container">
            <h5>Trending</h5>
            <h4>{props.title}</h4>
            <h5>{props.tweets} Tweets</h5>
        </div>
    )
}