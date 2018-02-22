import React, { Component } from 'react';
import API from '../../api/api'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ScoresPage.css';

class ScoresPage extends Component {

    constructor() {
        super();
        this.state = {
            highscores: []
        }
    };

    componentDidMount() {
        this.getScores();
    };

    getScores = () => {
        API.fetchHighScores()
            .then((scores) => {
                this.setState({
                    highscores: scores
                })
            })
    }

    render() {
        return (
          <div className='Settings'>
            <header className='header-footer'>High Scores</header>
            <div>
                {this.state.highscores.map(score => (
                    <div>
                        {score.initials}
                    </div>
                ))}
            </div>
            <div>
              <Link className='Settings-cancel btn btn-default btn-sm' to='/'>Cancel</Link>
            </div>
          </div>
        )
    }

}

export default ScoresPage;
