import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader123 from "./Loader123";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (page = 1) => {
    const { category, pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=174ac7afebdc42728865d72edb9de8a6&page=${page}&pageSize=${pageSize}`;
  
    this.setState({ loading: true });
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Log the response data for debugging
  
      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        loading: false,
        page,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  newpage = () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      return; // No more pages to load
    }
    this.fetchNews(this.state.page + 1);
  };

  prevpage = () => {
    if (this.state.page <= 1) {
      return; // No previous page
    }
    this.fetchNews(this.state.page - 1);
  };

  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Loader123 />}
        <div className="row my-4">
          {!this.state.loading && Array.isArray(this.state.articles) && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                url={element.urlToImage}
                newsurl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.prevpage}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.newpage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
