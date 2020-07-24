import React, {Component} from 'react';

class StaffPicks extends Component {
    state = {
        picks: []
    }

    componentDidMount(){
        this.loadPicks();
    }

    loadPicks = (event) => {
        fetch(this.props.baseURL + '/picks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
            .then (resJson => {
            this.setState({picks: resJson});
        }).catch (error => console.error({'Error': error}))
    }

    render () {
        return (
        <div className="picks">
            <h1>Staff Picks</h1>
            <div className="book-display">
                {this.state.picks.map ((book, index) => {
                return (
                <div className="book" key={index} onClick={() => this.props.handleSearch(book.name)}>
                    <img alt={book.name} src={book.url} className="book-img"/>
                </div>
                )})}
            </div>
        </div>
        )
    }
}

export default StaffPicks;