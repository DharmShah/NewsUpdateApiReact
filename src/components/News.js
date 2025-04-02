import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>News Headlines</h2>
                <div className='row'>
                        <div className="col-md-4">
                            <NewsItem title="mytitle" description="desc" imageUrl="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg" />
                        </div>                    
                </div>
            </div>
        )
    }
}

export default News
