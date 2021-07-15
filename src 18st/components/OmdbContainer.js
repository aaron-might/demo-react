import React, { Component } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';
import Loader from "react-loader-spinner";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: '',
  };

  // TODO: componentDidMount method needs to be fixed
  componentDidMount() {
    this.searchMovies("The Matrix")
  }
  searchMovies = (query) => {
    this.setState({loading: true});
    API.search(query)
      .then((res) => {this.setState({ result: res.data, loading:false }), 
    })
      .catch((err =>{
        console.log(loading:false);
      
      }
  };

  // TODO: handleInputChange method needs to be fixed
  handleInputChange = event => {
    event.preventDefault();
    this.setState({search: event.target.value})
    console.log(event.target.value)
  };

  // TODO: handleFormSubmit method needs to call `this.searchMovies(this.state.search)`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search)
    //console.log(this.state.search)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || 'Search for a Movie to Begin'}
            >
              renderPoster= ()=>{

               if {this.state.result.title}
               return (
               <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
               )

              };
            }else{
              return <h3>no results to display</h3>
            }
              {this.renderPoster}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
