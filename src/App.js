import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavInshorts from './components/NavInshorts'
import NewsContent from './components/NewsContent'
import './styles/app.scss'

const baseURL = 'http://api.mediastack.com/v1/news'
const apiKey = `access_key=${process.env.REACT_APP_API_KEY}`
const apiSp = 'countries=in&count=20'

const App = () => {
    const [category, setCategory] = useState("general")
    const [newsArray, setNewsArray] = useState([])
    // const [newsResults, setNewsResults] = useState([])

    const newsAPI = async () => {
        try {
            const news = await axios.get(`${baseURL}?${apiKey}&categories=${category}& ${apiSp}`)

            // console.log(news);
            setNewsArray(news.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(newsArray);

    useEffect(() => {
        newsAPI()
        // eslint-disable-next-line
    }, [category])

    return (
        <div>
            <NavInshorts setCategory={setCategory} />
            <NewsContent newsArray={newsArray} />
        </div>
    )
}

export default App
