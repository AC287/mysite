import React from 'react'
import Link from 'react-router'
import $ from 'jquery'

export default React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="profileimg">
          <img className="img-circle" src="./../assets/ArthurPI.jpg"/>
        </div>
        <div className="social-networking">
          <a href="https://github.com/AC287"><img src="./../assets/GitHub.png"></img></a>
          <a href="https://www.linkedin.com/in/ac287"><img src="./../assets/In.png"></img></a>
          <a href="https://about.me/arthurchen287"><img src="./../assets/me_3.png"></img></a>
        </div>
      </div>
    )
  }
})
