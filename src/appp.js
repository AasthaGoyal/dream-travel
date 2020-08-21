import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.usubscribe = null;
        this.state = {
            boards:[]
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, description, author} = doc.data();
            boards.push({
							key: doc.id,
							doc,
							title,
                            description,
                            author,
                        });
                    });
        this.setState({
            boards
        });
        
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <h3> BOARD LIST</h3>
                    <div class="panel-body">
                        <h4>
                            <Link to="/create"> Add Board</Link>
                            <table class="table table-stripe">
                                <thead>
                                    <tr>
                                        <th> Title</th>
                                        <th> Description</th>
                                        <th> Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.boards.map(board => 
                                        <tr>    
                                            <td><Link to={`/show/${board.key}`}> {board.title} </Link></td> 
                                            <td> {board.description}</td>
                                            <td> {board.author}</td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default App