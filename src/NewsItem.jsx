import { Component } from "react";
export default class NewsItem extends Component{
    render(){
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props
        return(
            <>
            <div className="card"style={{width: "20rem"}} >
            <span style={{zIndex:"1", left:"90%"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By <b>{author}</b> on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
            </>
        )
    }
}