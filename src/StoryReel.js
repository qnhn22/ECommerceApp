import React from 'react'
import "./StoryReel.css"
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                title="Ronaldo"
                profileSrc="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY"
                image="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY" />
            <Story
                title="Messi"
                profileSrc="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/Messi%20PSG%20Training.png?itok=yW1geQa6"
                image="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/Messi%20PSG%20Training.png?itok=yW1geQa6" />
            <Story
                title="Neymar"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/440px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/440px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" />
            <Story
                title="Bale"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/AUT_vs._WAL_2016-10-06_%28155%29.jpg/440px-AUT_vs._WAL_2016-10-06_%28155%29.jpg"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/AUT_vs._WAL_2016-10-06_%28155%29.jpg/440px-AUT_vs._WAL_2016-10-06_%28155%29.jpg" />
            <Story
                title="Hazard"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/440px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/440px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg" />
            {/* <Story
                title="De Bruyne"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/440px-Kevin_De_Bruyne_201807091.jpg"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/440px-Kevin_De_Bruyne_201807091.jpg" /> */}
        </div>
    )
}

export default StoryReel