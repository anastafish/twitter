import '../styles/sidebar.css'

export default function SideBar(props){

    function Item(props){
        return(
            <div className="item-container">
                <img src={`../../images/${props.img}`} alt="" />
                <h3>{props.title}</h3>
            </div>
        )
    }

    return(
        <div className="sidebar-container">
            <img className='twitter-logo' src="../../images/twitterLogo.png" alt="" />
            <div className="items">
                <Item title={"Home"} img={"home.svg"}/>
                <Item title={"Explore"} img={"hash.svg"}/>
                <Item title={"Notifications"} img={"noti.svg"}/>
                <Item title={"Messages"} img={"msg.svg"}/>
                <Item title={"Bookmarks"} img={"book.svg"}/>
                <Item title={"Lists"} img={"list.svg"}/>
                <Item title={"Profile"} img={"profile.svg"}/>
                <Item title={"More"} img={"dots.svg"}/>
            </div>
            <button className='tweet-btn'>Tweet</button>
        </div>
    )
}