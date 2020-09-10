import * as React from 'react';


interface Props {
    onChange: Function
}

class SeachBar extends React.Component<Props> {

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    //on change pass text back to parent and request new api call
    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log("change");
        this.props.onChange(e.currentTarget.value);
    }

    componentDidMount() {
        this.props.onChange("pingpong");
    }

    render() {
        return(
            <div className="container" style={{padding: 20}} >
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group input-group-lg" id="searchForm">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Giphy"
                            aria-label="Search"
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>      
        );
    }
    }

export default SeachBar;
