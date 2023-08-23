import Navbar from "./Navbar"
import News from "./News"
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { Component } from "react"
import LoadingBar from 'react-top-loading-bar'

class App extends Component{
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render(){
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
        <Routes>   {/**keys must be given, if not given react will consider each News component same */}
          <Route exact path = "/" element={<News setProgress={this.setProgress} key="general" articlesPerPage={15} category="general"/>}/>
          <Route exact path = "/business" element={<News setProgress={this.setProgress} key="business" articlesPerPage={15} category="business"/>}/>
          <Route exact path = "/entertainment" element={<News setProgress={this.setProgress} key="entertainment" articlesPerPage={15} category="entertainment"/>}/>
          <Route exact path = "/health" element={<News setProgress={this.setProgress} key="health" articlesPerPage={15} category="health"/>}/>
          <Route exact path = "/sports" element={<News setProgress={this.setProgress} key="sports" articlesPerPage={15} category="sports"/>}/>
          <Route exact path = "/science" element={<News setProgress={this.setProgress} key="science" articlesPerPage={15} category="science"/>}/>
          <Route exact path = "/technology" element={<News setProgress={this.setProgress} key="technology" articlesPerPage={15} category="technology"/>}/>
        </Routes>
      </Router>
      </>
    )
  }
}


export default App
