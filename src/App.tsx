import React from 'react';
import './App.css';

const questionsForInterview = [
  'Tell me about yourself.',
  'Walk me through your resume.',
  'How did you hear about this position?',
  'Why do you want to work at this company?',
  'Why do you want this job?',
  'Why should we hire you?',
  'What can you bring to the company?',
  'What are your greatest strengths?',
  'What do you consider to be your weaknesses?',
  'What is your greatest professional achievement?',
  'Tell me about a challenge or conflict you’ve faced at work, and how you dealt with it.',
  'Tell me about a time you demonstrated leadership skills.',
  'What’s a time you disagreed with a decision that was made at work?',
  'Tell me about a time you made a mistake.',
  'Tell me about a time you failed.',
  'Why are you leaving your current job?',
  'Why were you fired?',
  'Why was there a gap in your employment?',
  'Can you explain why you changed career paths?',
  'What’s your current salary?',
  'What do you like least about your job?',
  'What are you looking for in a new position?',
  'What type of work environment do you prefer?',
  'What’s your work style?',
  'What’s your management style?',
  'How would your boss and coworkers describe you?',
  'How do you deal with pressure or stressful situations?',
  'What do you like to do outside of work?',
  'Are you planning on having children?',
  'How do you stay organized?',
]

interface State {
  isShow: boolean,
  questions: string[],
  currentQuestion: string,
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends React.Component<{}, State> {
  state = {
    isShow: false,
    questions: [...questionsForInterview],
    currentQuestion: questionsForInterview[0],
  }

  getRandomQuestion = () => {
    const { questions } = this.state;
    const randomIndex = getRandomIntInclusive(1, questions.length);
    const randomQuestion = this.state.questions.find((item, i) => {
      if (i === randomIndex) {
        return item[i];        
      }

      return 0;
    }); 

    this.setState((): object => {
      return { currentQuestion: randomQuestion }
    })
  }

  start = () => {
    this.setState((state) => ({
      ...state,
      isShow: true,
    }));
  }


  render() {
    const { questions, currentQuestion, isShow } = this.state;
    const indexOfCurrentQuestion = questions
      .findIndex(item => item === currentQuestion) 
      + 1 
      + '. ';


    return (
      <div className="App">
        <button
          type="button"
          className={`App__start button ${isShow ? 'disabled' : ''}`}
          onClick={this.start}
        >
          Start
        </button>
        
        {
          isShow && (
            <div className="Question">
              <button
                type="button"
                className="Question__button button"
                onClick={this.getRandomQuestion}
              >
                Next question
              </button>

              <h1 className="Question__block">
                <span className="Question__number">
                  {indexOfCurrentQuestion}
                  </span>
                  {currentQuestion}
              </h1>              
            </div>
          )
      }
      </div> 
  );
  }
}

export default App;
