import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class MyLists extends Component {

    state = {
        futureBooks: [],
        pastBooks: [],
    }

    getUserLists = () => {
        fetch(this.props.baseURL + `/users/${this.props.user}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    futureBooks: resJson[0].toread,
                    pastBooks: resJson[0].read
                })
            })
            .catch((error) => console.error({ Error: error }));
    }

    removeFromList = (list,title) => {
        const paramString = `${this.props.user}/${list}/${title}`
        fetch(this.props.baseURL + "/users/remove/" + paramString, {
            method: "PUT",
            headers: { "Content-Type": "application/json",},
        })
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                futureBooks: resJson.toread,
                pastBooks: resJson.read
            })
        })
        .catch((error) => console.error({ Error: error }));
    };
    
    moveBookToFuture = (book) => {
        this.props.addToList("past",book);
        this.removeFromList("future",book);
    }

    componentDidMount(){
        if (this.props.user !== null){
            this.getUserLists();
        }
    }

    render() {
    if(this.props.user === null){
        return <Redirect to="/" />
    }
    return (
        <div className="list-div">
            <div className="one-list">
                <h2>Need To Read</h2>
                {this.state.futureBooks.map(book => (
                    <div className="book-div"key={book}>
                        <p>{book}</p>
                        <button onClick={() => this.removeFromList("future",book)}>Delete</button>
                        <button onClick={() => this.moveBookToFuture(book)}>Already Read</button>
                    </div>
                ))}
            </div>
            <div className="one-list">
                <h2>Already Read</h2>
                {this.state.pastBooks.map(book => (
                    <div className="book-div"key={book}>
                        <p>{book}</p>
                        <button onClick={() => this.removeFromList("past",book)}>Delete</button>
                </div>
                ))}
            </div>
        </div>
    )}
}

export default MyLists;
