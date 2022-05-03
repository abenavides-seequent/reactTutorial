import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const el = document.getElementById('root')
if(el === null) throw new Error('Root container missing in index.html')

type Props = {
  value: number;
}
//could also use interface for this

class Square extends React.Component<Props> {
  render() {
    return (
      <button className="square" onClick={()=> console.log('click')}>    {/* must have the arrow notation or else it will fire every single time the component is rerendered */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i: number) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(el);
root.render(<Game />);
