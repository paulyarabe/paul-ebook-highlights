import React from 'react';

const LibraryHeader = () => {
  return(
    <div className="header-nightsky">
        <nav className="navbar navbar-default">
            <div className="container">
                <h1 className="navbar-brand">PAUL’S LIBRARY</h1>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://paulyarabe.com" target="_blank" rel="noopener noreferrer">blog</a></li>
                    </ul>
                </div>
              <h4 className="instructions">Welcome :) Click in the green space next to a book title to load my highlights for that book (it’ll take a second). Then, message me about a highlight (each has a unique ID) that interests you, and we can discuss it! Works best on everything but iPhone..ensp✧*。ヾ(｡&gt;﹏&lt;｡)ﾉﾞ✧*。</h4>
            </div>
        </nav>
    </div>
  )
}

export default LibraryHeader
