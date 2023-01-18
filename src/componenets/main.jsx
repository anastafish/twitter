import { useState, useEffect } from 'react';
import '../styles/main.css'
import Post from './post';
import { collection, query, where, getDocs, setDoc, doc} from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import InfiniteScroll from 'react-infinite-scroller';




export default function Main(props){
    const auth = getAuth(props.app);
    const db = getFirestore(props.app)  
    const user = auth.currentUser;

    const [posts, setPosts] = useState([])
    console.log(posts)
    const [newPost, setNewPost] = useState({
            img:'',
            name:'',
            userName:'',
          tweet:"",
          comments:'0',
          retweet:'0',
         heart:'0',
          chart:'0',        
    })   

    function handleChange(event){
        const {value, name}  = event.target
        setNewPost(prevValue => ({
            ...prevValue,
            [name]:value,
            img:user.providerData[0].photoURL ? user.providerData[0].photoURL : '../../images/profile.svg' ,
            name:user.providerData[0].displayName ? user.providerData[0].displayName : 'user123',
            userName:`@${user.providerData[0].displayName ? user.providerData[0].displayName : 'user123'}`,
        }))
       }

    function tweet(){
        setDoc(doc(db, "posts", 'post10'),newPost)
    }   

    const fetchPosts = async() =>{
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setPosts( post => [...post, doc.data()])
        });


    }

    useEffect(() => {
        fetchPosts();
      }, [])

    const postsElements = posts.map((post, index) => {
        return <Post info={post} key={index}/>
    })  

    return(
        <div className="main-container">
            <div className='main-top'>
                <h2>Home</h2>
                <div className="main-top-bottom">
                    <h3>For you</h3>
                    <h3>Following</h3>
                </div>
            </div>
            <div className='main-middle'>
                <div className='main-middle-top'>
                    <img src={user ? user.providerData[0].photoURL : "../../images/profile.svg"} alt="" />
                    <textarea onChange={handleChange} value={newPost.tweet} placeholder="What's happining?" name="tweet" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='main-middle-bottom'>
                    <div>
                        <img src="../../images/media.svg" alt="" />
                        <img src="../../images/gif.svg" alt="" />
                        <img src="../../images/poll.png" alt="" />
                        <img src="../../images/emoji.svg" alt="" />
                        <img src="../../images/schedule.svg" alt="" />
                        <img src="../../images/location.svg" alt="" />
                    </div>
                    <button onClick={tweet}>Tweet</button>                    
                </div>
            </div>   
            <div className="posts-container">
            {postsElements}
                    </div>             
        </div>
    )
}