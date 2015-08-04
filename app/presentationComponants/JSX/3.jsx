var React = require('react');

var Main = React.createClass({
  render: function() {
    var rawThingsToSay = [
      'Lets get CRUUUNKKED!',
      'Does that guy smell funny?',
      'How many white dudes make a gang?'
    ]
    var finalThingsToSay = rawThingsToSay.map( function(thingToSay) {
      return (
        <div>
          <span>{thingToSay}</span>
        </div>
      );
    });
    return (
      <div>
        Sometimes I say ... {finalThingsToSay}
      </div>
    );
  }
});

module.exports = Main;
