import { Component } from "react";

import NewsItem from "./NewsItem";
import SpinnerLoader from "./SpinnerLoader";
export default class News extends Component{
    constructor(props){  {/**runs first */}  {/**props are passed to change title otherwise not needed */}
        super(props)
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`${this.props.category}-NewsMonkey`
    }

    async componentDidMount(){  {/**runs last */}
        this.props.setProgress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4b6ce172e1ce4366a98a6183fb641493&page=1&pageSize=${this.props.articlesPerPage}`
        let data = await fetch(url)
        // this.props.setProgress(50)
        let parseData = await data.json()
        // this.props.setProgress(70)
        // console.log(parseData)
        this.setState({articles:parseData.articles,totalArticles:parseData.totalResults})
        this.props.setProgress(100)
    }

    handlePrevClick=async()=> {

        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4b6ce172e1ce4366a98a6183fb641493&page=${this.state.page-1}&pageSize=${this.props.articlesPerPage}`
        this.setState({
            loading:true,
            articles:[]
        })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            loading:false,
            page:this.state.page-1,
            articles:parseData.articles
        })
        
    }
    handleNextClick=async ()=> {

        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4b6ce172e1ce4366a98a6183fb641493&page=${this.state.page+1}&pageSize=${this.props.articlesPerPage}`
        this.setState({
            loading:true,
            articles:[]
        })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            loading:false,
            page:this.state.page+1,
            articles:parseData.articles
        })
    }

    render(){
        let {articlesPerPage}=this.props
        return(
            <>
            <div className="container" style={{marginTop:"60px"}}>
            <h2 className="text-center">News Monkey Headlines</h2>
            {this.state.loading?<SpinnerLoader/>:null}
            <   div className="row mt-3">
                {this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-4 my-2">   
                    <NewsItem title={element.title?element.title.slice(0,30):""} source={element.source.name?element.source.name:""} author={element.author?element.author:"unknown"} date={element.publishedAt?element.publishedAt:""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={element.url?element.url:""}/>
                    {/**used .slice to take only few characters so that every NewsItem has same lenght */}
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-evenly my-5">
                    <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalArticles/articlesPerPage)<=this.state.page}className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
            
            </>
        )
    }
}