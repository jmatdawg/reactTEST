import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class Films extends Component {
    constructor (props) {
        super (props);
        this.state = {
            films: []
        }
    } 
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
            return response.json();
        }).then(films => {
            this.setState({films});
            })
          }

    render() {
            return (
                <div>
                    <FilmList films={this.state.films} />
                </div>
            )}
}

export default Films;