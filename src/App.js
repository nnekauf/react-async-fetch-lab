// create your App component here
import React from 'react'

class App extends React.Component{

    state= {
        astros: []
            }

    componentDidMount () {
        fetch( "http://api.open-notify.org/astros.json")
        .then (r => r.json())
        .then(astrosData => this.setState({astros: astrosData}))
    }

    render () {
        return(
            <div>

            </div>
        )
    }
}
export default App