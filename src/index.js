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
      urls: [],
      highlights: [],
    }
  }

  componentDidMount() {
    fetch('https://hilight-db.herokuapp.com/titles')
      .then(resp => resp.json())
      .then(titles => this.setState({
        titles: titles
      }))
    .then(() => {
      fetch('https://hilight-db.herokuapp.com/urls')
      .then(resp => resp.json())
      .then(urls => this.setState({
        urls: urls
      }))
    })
  }

  getHighlights(selectedTitle) {
    fetch('https://hilight-db.herokuapp.com')
      .then(resp => resp.json())
      .then(highlight_hash => this.setState({
        highlights: highlight_hash[selectedTitle]
      }))
      document.getElementById('floatingTitle').style.visibility = 'visible'
      document.getElementById('floatingTitle').textContent = selectedTitle
    }

    render() {
        return (
            <div>
              <LibraryHeader />
              <FloatingTitle />
              <BookList books={this.state.titles}
                        onTitleSelect={selectedTitle => this.getHighlights(selectedTitle)}
                        urls={this.state.urls}/>
              <HighlightHash highlights={this.state.highlights} />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
