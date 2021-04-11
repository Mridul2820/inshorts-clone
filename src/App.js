import React, { useState } from 'react'
import NavInshorts from './components/NavInshorts'
import './styles/app.scss'

const App = () => {
    const [category, setCategory] = useState("general")
    return (
        <div>
            <NavInshorts setCategory={setCategory} />
        </div>
    )
}

export default App
