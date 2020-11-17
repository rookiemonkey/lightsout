import React, { Component } from "react";
import Loader from './Loader';
import lapsedTime from '../helpers/formatTime';

class Result extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            name: '',
            difficulty: '',
            score: 0,
            isSubmitted: false,
            isLoading: false,
            hasGivenUp: false,
            response: {}
        }
    }

    async componentDidMount() {
        // stops the timer
        clearInterval(this.props.ticker);

        // fetch an anti csrf token
        const raw = await fetch("https://krrb-prod-highscore-api.herokuapp.com/token");
        const token = await raw.json();

        // set the token and score
        this.setState({
            ...this.state,
            token: token.token,
            score: this.props.score,
            difficulty: this.props.difficulty
        });
    }

    handleChange = event => {
        this.setState({ ...this.state, name: event.target.value })
    };

    handleSubmit = async event => {
        event.preventDefault();
        await this.setState({
            ...this.state,
            isLoading: true,
            hasGivenUp: this.props.hasGivenUp
        })

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        const url = 'https://krrb-prod-highscore-api.herokuapp.com/lightsout/postscore';
        const raw = await fetch(url, options);
        const response = await raw.json();

        // yourPlace is null, when not in top 10

        this.setState({ ...this.state, response, isSubmitted: true, isLoading: false });
    }

    render() {
        const { handlePlayAgain, hasGivenUp } = this.props;
        const { isSubmitted, isLoading, response } = this.state;

        return (
            <div className='result'>
                {
                    hasGivenUp
                        ? (<React.Fragment>
                            <span className='neon-orange'>YOU</span>
                            <span className='neon-blue'>LOSE!</span>
                        </React.Fragment >)
                        : (<React.Fragment>
                            <span className='neon-orange'>YOU</span>
                            <span className='neon-blue'>WIN!</span>
                        </React.Fragment >)
                }

                {
                    isLoading && <Loader />
                }

                {
                    isSubmitted && Object.keys(response).length > 0
                        ? (
                            <React.Fragment>

                                {
                                    response.yourPlace
                                        ? <p>you are on {response.yourPlace} spot!</p>
                                        : null
                                }

                                <p>Top players for {this.props.difficulty} level</p>
                                <table>
                                    <thead>
                                        <th>Place</th>
                                        <th>Player</th>
                                        <th>Lapsed Time</th>
                                    </thead>
                                    <tbody>
                                        {
                                            response.highScores.map((player, index) => (
                                                <tr key={player}>
                                                    <td>{index + 1}</td>
                                                    <td>{player.name}</td>
                                                    <td>{lapsedTime(player.score)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </React.Fragment>
                        )
                        : !isLoading
                            ? (
                                <div class="result-preview">
                                    <p>Score: {this.props.score} (in seconds)</p>
                                    <p>Lapsed Time: {lapsedTime(this.props.score)} </p>
                                    <p>Level: {this.props.difficulty}</p>

                                    <form method="POST" onSubmit={this.handleSubmit}>
                                        <input name="name" onChange={this.handleChange} placeholder="Name" required />
                                        <button>Submit Score</button>
                                    </form>
                                </div>
                            )
                            : null
                }

                <button onClick={handlePlayAgain}>Play Again</button>
            </div>
        )
    }
}


export default Result;
