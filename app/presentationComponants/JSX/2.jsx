var React = require('react');

var Main = React.createClass({
  render: function() {
    var thingsToSay = 'Lets get CRUUUNKKED!';
    return (
      <div>
        Sometimes I say ... {thingsToSay}
      </div>
    );
  }
});

module.exports = Main;
