import { Container } from '@material-ui/core'
import React from 'react'
import uuid from 'react-uuid'
import NewsCard from './NewsCard'

const NewsContent = ({ newsArray }) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="download-message">
                    <span className="download-text">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <img 
                        src="https://assets.inshorts.com/website_assets/images/appstore.png" 
                        alt="app store"
                        height="80%"
                    />
                    <img 
                        src="https://assets.inshorts.com/website_assets/images/playstore.png"          
                        alt="playstore"
                        height="80%"
                        />
                </div>
                {newsArray.map(newsItem => (
                    <NewsCard key={uuid()} newsItem={newsItem} />
                ))}
            </div>
        </Container>
    )
}

export default NewsContent
