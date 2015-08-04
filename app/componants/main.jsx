var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var MUIContext = require('../mixins/MUIContext.jsx');

var sayings = require('../data/sayings.json');

var DemoInput = require('./demo-input.jsx');
var MappedSayings = require('./mapped-sayings.jsx');

var Main = React.createClass({
  mixins: [MUIContext],
  getInitialState: function() {
    return {
      sayings: sayings
    }
  },
  addSaying: function(newSaying) {
    this.state.sayings.unshift(newSaying);
    this.setState({
      sayings: this.state.sayings
    });
  },
  render: function() {
    return (
      <div className="u-centerAlign">
        <mui.AppBar
          title="Sayings App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <div className="appCenterWidth">
          <DemoInput addSaying={this.addSaying}/>
          <MappedSayings sayings={this.state.sayings}/>
        </div>
      </div>
    );
  }
});

module.exports = Main;
