import '../styles/sidebar.css'
import { getAuth, signOut } from "firebase/auth";


export default function SideBar(props){
    const auth = getAuth(props.app);

        function signOutHandler(){
        signOut(auth).then(() => {
        console.log('Sign-out successful.')
        window.open('/login', '_self')
        }).catch((error) => {
        console.log('error')
        });
        }

    function Item(props){
        return(
            <a href={props.link}>
                <div className="item-container">
                    <img src={`../../images/${props.img}`} alt="" />
                    <h3>{props.title}</h3>
                </div>
            </a>
        )
    }

    return(
        <div className="sidebar-container">
            <img className='twitter-logo' src="../../images/twitterLogo.png" alt="" />
            <div className="items">
                <Item link={'/'} title={"Home"} img={"home.svg"}/>
                <Item link={'/explore'} title={"Explore"} img={"hash.svg"}/>
                <Item title={"Notifications"} img={"noti.svg"}/>
                <Item title={"Messages"} img={"msg.svg"}/>
                <Item title={"Bookmarks"} img={"book.svg"}/>
                <Item title={"Lists"} img={"list.svg"}/>
                <Item title={"Profile"} img={"profile.svg"}/>
                <Item title={"More"} img={"dots.svg"}/>
            </div>
            <button className='tweet-btn'>Tweet</button>
            <button className='signout-btn' onClick={signOutHandler}>Sign Out</button>

        </div>
    )
}