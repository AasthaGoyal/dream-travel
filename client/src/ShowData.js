import React from "react";

class ShowData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
    }

    componentDidMount() {
        this.callApi()
        .then(res => {
            console.log('the user is', res.user);
            this.setState({ itemList: res.user})
        })
        .catch(err => console.log(err));

        console.log(this.state.itemList);
    }

    callApi = async () => {
        const response = await fetch('localhost:3001/view');
        const body = await response.json();

        if(response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        {/* <img src ={logo} className="App-logo" alt="logo"/> */}
                        <h1 className="App-title"> Welcome to react</h1>
                    </header>
                </div>
                <div> {this.state.itemList[0]}</div>
            </div>
        )
    }
}

export default ShowData;