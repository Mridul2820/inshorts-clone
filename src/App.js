import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavInshorts from './components/NavInshorts'
import NewsContent from './components/NewsContent'

import { currentDate, lastDate } from "./utils";
import './styles/app.scss'

const baseURL = 'http://api.mediastack.com/v1/news'
const apiKey = `access_key=${process.env.REACT_APP_API_KEY}`
const apiDate= `date=${currentDate},${lastDate}`
// const apiDate= `date=${currentDate}`
const apiSp = 'languages=en&countries=in'

const App = () => {
    const [category, setCategory] = useState("general")
    const [newsArray, setNewsArray] = useState([])
    const [loadMore, setLoadMore] = useState(10)

    const newsAPI = async () => {
        try {
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";

            const news = await axios.get(`${proxyUrl}${baseURL}?${apiKey}&${apiDate}&categories=${category}& ${apiSp}&limit=${loadMore}`)

            // console.log(news.data);
            setNewsArray(news.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(newsArray);

    useEffect(() => {
        newsAPI()
        // eslint-disable-next-line
    }, [category, loadMore])

    return (
        <div>
            <NavInshorts setCategory={setCategory} />
            <NewsContent 
                loadMore={loadMore}
                setLoadMore={setLoadMore}
                newsArray={newsArray}
            />
        </div>
    )
}

export default App
