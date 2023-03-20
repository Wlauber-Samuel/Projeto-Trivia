import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

// Requisito 3 feito pelo Nicolas

class Game extends React.Component {
  state = {
    id: 0,
    results: [],
    alternativas: [],
  };

  async componentDidMount() {
    this.fetchQuestions();
  }

  // componentDidUpdate(prev) {
  //   const { id, results } = this.state;
  //   const number = 0.5;
  //   if (prev.id !== id) {
  //     const alternativas = [...results[id].incorrect_answers,
  //       results[id].correct_answer];
  //     const alternativasRandom = alternativas.sort(() => (
  //       Math.random() - number
  //     ));
  //     this.setState({
  //       alternativas: alternativasRandom,
  //     });
  //   }
  // }

  fetchQuestions = async () => {
    const { history } = this.props;
    const { id } = this.state;
    const number = 0.5;
    const token = localStorage.getItem('token');
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    if (data.response_code === 0) {
      const alternativas = [...data.results[id].incorrect_answers,
        data.results[id].correct_answer];
      const alternativasRandom = alternativas.sort(() => (
        Math.random() - number
      ));
      this.setState({
        results: data.results,
        alternativas: alternativasRandom,
      });
    } else {
      history.push('/');
    }
  };

  handleClick = () => {
    const { history } = this.props;
    const { id, results } = this.state;
    const number = 0.5;
    const amount = 3;
    this.setState((current) => ({
      id: current.id + 1,
    }), () => {
      if (id === amount) {
        history.push('/');
      }
      const alternativas = [...results[id + 1].incorrect_answers,
        results[id + 1].correct_answer];
      const alternativasRandom = alternativas.sort(() => (
        Math.random() - number
      ));
      this.setState({
        alternativas: alternativasRandom,
      });
    });
  };

  render() {
    const { id, results, alternativas } = this.state;

    return (
      <div>
        <Header />

        { results.length > 0 && (
          <div>
            <h3 data-testid="question-category">{ results[id].category }</h3>
            <h4 data-testid="question-text">{ results[id].question }</h4>

            <div data-testid="answer-options">
              { alternativas.map((alternativa, index) => {
                const correctAnswer = results[id].correct_answer;
                console.log(correctAnswer);
                return (
                  <button
                    type="button"
                    onClick={ this.handleClick }
                    data-testid={ alternativa === correctAnswer
                      ? 'correct-answer' : `wrong-answer-${index}` }
                    key={ alternativa }
                  >
                    { alternativa }
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
