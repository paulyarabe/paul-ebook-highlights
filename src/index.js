import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import LibraryHeader from './components/LibraryHeader'
import FloatingTitle from './components/FloatingTitle'
import BookList from './components/BookList'
import HighlightHash from './components/HighlightHash'
import './styles/app.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      titles: [],
      highlights: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then(resp => resp.json())
      .then(highlight_hash => this.setState({
        titles: Object.keys(highlight_hash)
      }))
  }

  getTitle(selectedTitle) {
    fetch('http://localhost:3000')
      .then(resp => resp.json())
      .then(highlight_hash => this.setState({
        highlights: highlight_hash[selectedTitle]
      }))
      document.getElementById('floatingTitle').textContent = selectedTitle
    }

    render() {
        return (
            <div>
              <LibraryHeader />
              <FloatingTitle />
              <BookList books={this.state.titles}
                        onTitleSelect={selectedTitle => this.getTitle(selectedTitle)}/>
              <HighlightHash highlights={this.state.highlights} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
