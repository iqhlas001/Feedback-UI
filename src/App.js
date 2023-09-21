import Header from "./components/Header"
import {Link} from 'react-router-dom'
import {BrowserRouter as router, Route, Router, Routes, BrowserRouter} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import AboutPage from "./pages/AboutPage"
import AboutIconLInk from "./components/AboutIconLInk"

function App(){

const [feedback, setFeedback] = useState(FeedbackData)
const addFeedback = (newFeedback) => {
newFeedback.id = uuidv4()
setFeedback([newFeedback, ...feedback])
}
const deleteFeedback = (id) => {
    if(window.confirm("Are You Sure?")){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
    return (
    <BrowserRouter>
    <Header/>
    {/* <div className="container"> */}
    <Routes>
        <Route exact path='/' element=
        {
            <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/>
            </>
        }>
        </Route>
        <Route path='/about' element={<AboutPage />}></Route>
    </Routes>
    {/* </div> */}
    <AboutIconLInk />
    </BrowserRouter>
    )
}

export default App