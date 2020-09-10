import * as React from 'react';

//components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

interface State {
  isLoaded: boolean,
  data: [string]
}

class App extends React.Component<{}, State> {

  public searchCall = (query: string) => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=9HuUJyGlmBT9c8L79SM7M1WqDdGwUFQG&q='+query+'&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(
            (result) => {
              try{
                for(let i = 0; i < 25; i++){
                  let newData = this.state.data;
                  newData[i] = result.data[i].images.original.url

                  this.setState({
                      isLoaded: this.state.isLoaded,
                      data: newData
                  });
                }

                this.setState({
                  isLoaded: true,
                  data: this.state.data
                });

              } catch (error) {
                this.setState({
                  isLoaded: false,
                  data: this.state.data
                });
              }                

              this.setState({
                  isLoaded: true,
                  data: this.state.data
              });
              
            },
            (error) => {
                console.log(error)
            }
        )
  }

  componentWillMount() {
    this.setState({
        isLoaded: false,
        data: [""]
    });
  }

  render() {
    return(
      <div className="conatiner">
        <div className="row">
          <div className="col">
            <SearchBar onChange={this.searchCall}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchResults data={this.state.data} isLoaded={this.state.isLoaded}/>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
