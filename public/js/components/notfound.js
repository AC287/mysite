import React, {Component} from 'react'
/*
export default React.createClass({
  render(): {
    return(
      <div className="container-fluid notfound">
        <h3>This section is under construction or doesn’t exit. But don’t worry . . . </h3>
        <img src='https://bostongazette.files.wordpress.com/2014/02/the-lego-movie-awesome-e1392309318427.png'/>
      </div>
    )
  }
});
*/

export class NotFound extends React.Component {
  render() {
    return(
      <div className="container-fluid notfound">
        <h3>This section is under construction or doesn’t exit. But don’t worry . . . </h3>
        <img src='https://bostongazette.files.wordpress.com/2014/02/the-lego-movie-awesome-e1392309318427.png'/>
      </div>
    );
  }
}
export default NotFound
