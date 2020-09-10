/*
Renders response from Giphy API to gifs
*/

//third party
import * as React from 'react';

//state
interface Props {
    isLoaded: boolean,
    data: [string]
}

class SearchResults extends React.Component<Props>{

    //show loading or map to gifs
    render() {
        return(
            <div>
                {this.props.isLoaded ?
                    <div className="container-fluid">
                        <div className="row">
                            {this.props.data.map((result) => (                                
                                <div className="col">
                                    <img src={result} style={{padding: 20}}/>
                                </div>                                
                            ))}
                        </div>
                    </div> :
                    <div className="container-fluid">
                        <div className="row">                
                            <div className="col">
                                <img src='https://media4.giphy.com/media/hEc4k5pN17GZq/200.gif' style={{padding: 20}}/>
                            </div>
                        </div>
                </div>
                }
            </div>
        );
    }
}

export default SearchResults;
