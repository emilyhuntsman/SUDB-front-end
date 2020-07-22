import React, {Component} from 'react';

class StaffPicks extends Component {
    state = {
        picks: []
    }

    handleClick = (event) => {
        console.log("inside...");
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
            {(this.state.picks.length != 0) ? <p>success</p> : <button onClick={() => this.handleClick()}>picks</button>
            }
        </div>
        )
    }
}

export default StaffPicks;