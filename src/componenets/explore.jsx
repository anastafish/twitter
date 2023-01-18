import SideBar from "./sidebar"
import TrendItem from "./trend"
import '../styles/explore.css'

export default function Explore(props){
    return(
        <div className="explore-container">
            <SideBar/>
            <div className="explore-top">
                <input placeholder="Search Twitter" type="text" />
                <div className="explore-sections">
                    <div><h3>For You</h3></div>
                    <div><h3>Trending</h3></div>
                    <div><h3>News</h3></div>
                    <div><h3>Sports</h3></div>
                    <div><h3>Entertaiment</h3></div>
                </div>
                <div className="explore-trends">
                <TrendItem title={'Zack Synder'} tweets={'9,949'}/>
                <TrendItem title={'Al-Aqsa Mosque'} tweets={'2,187'}/>
                <TrendItem title={'Fortnite Leaks'} tweets={'1,949'}/>
                <TrendItem title={'Yummy'} tweets={'2,251'}/>
                <TrendItem title={'Activision Blizzard'} tweets={'1,905'}/>
                <TrendItem title={'Lionel Messi'} tweets={'129,5k'}/>
            </div>
            </div>
        </div>
    )
}