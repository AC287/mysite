import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

export default React.createClass({
  render: function() {
    return(
      <div>
        <nav className="navbar navbar-default navimain">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/contactme">CONTACT ME</Link></li>
            </ul>
          </div>
        </nav>
        <div className="renderBody">
        {this.props.children}
        </div>
      </div>
    )
  }
})
