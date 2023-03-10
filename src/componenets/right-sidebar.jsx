import '../styles/right-sidebar.css'
import TrendItem from './trend'

export default function RightSideBar(props){
    return(
        <div className="right-sidebar-container">
            <div className="search">
                <img src="../../images/search.svg" alt="" />
                <input placeholder='Search Twitter' type="text" name="" id="" />
            </div>
            <div className="trend">
                <h1>What's happining</h1>
                <TrendItem title={'Hogwarts Legacy'} tweets={'22.5k'}/>
                <TrendItem title={'Hogwarts Legacy'} tweets={'22.5k'}/>
                <TrendItem title={'Hogwarts Legacy'} tweets={'22.5k'}/>
                <TrendItem title={'Hogwarts Legacy'} tweets={'22.5k'}/>


            </div>
        </div>
    )
}