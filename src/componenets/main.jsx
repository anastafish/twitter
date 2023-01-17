import '../styles/main.css'

export default function Main(props){
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
                    <img src="../../images/anas.jpg" alt="" />
                    <textarea placeholder="What's happining?" name="" id="" cols="30" rows="10"></textarea>
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
                    <button>Tweet</button>
                </div>
            </div>
        </div>
    )
}