import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {


  static defaultProps = {
    country:'us',
    pageSize: 5,
   category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
   capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

   constructor(props){
    super(props);
    console.log("Hello i am a constructor from news component")
    this.state  = {
      articles: [],
      loading: true,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsLetter`;
  }

  async updateNews() {
  this.props.setProgress(0);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY; // 🔑 read from .env.local
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);

  this.setState({
    articles: parsedData.articles,
    totalArticles: parsedData.totalResults,
    loading: false,
  });

  this.props.setProgress(100);
}

    async componentDidMount(){
       this.updateNews();
    }

   handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
    this.updateNews();
  });
  }
  handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 }, () => {
    this.updateNews();
  });
  }

  render() {
     
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '40px 0px'}}>NewsLetter - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading &&<Spinner/>}
        <div className="row">
             {!this.state.loading && this.state.articles.map((element)=>{
            return    <div className="col-md-4" key={element.url} >
        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={element.urlToImage}
        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
             })}
             <div className="container d-flex justify-content-between">
             <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>
  &larr; Previous
</button>

<button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>
  Next &rarr;
</button>

        </div>
         
         </div>  
      </div>
    )
  }
}

export default News