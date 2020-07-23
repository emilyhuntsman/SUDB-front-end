import React, {Component} from 'react';

class StaffPicks extends Component {
    state = {
        picks: []
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
            {this.loadPicks()}
            {this.state.picks.map ((book, index) => {
            return (
            <div className="book" key={index}>
                <img alt="" src={book.url} className="book-img"/>
                <h5 className="hFive">{book.title}</h5>
            </div>
            )
            })}
        </div>
        )
    }
}

export default StaffPicks;