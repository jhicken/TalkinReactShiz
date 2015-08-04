var React = require('react');
var mui = require('material-ui');

var MappedSayings = React.createClass({
  render: function() {
    var mappedSayings = this.props.sayings.map(function(saying, index) {
      return (
        <div key={saying.saying}>
          <mui.ListItem
            primaryText={saying.person}
            secondaryText={
              <p>
                <span>{saying.sayingTitle}</span><br/>
                {saying.saying}
              </p>
            }
            secondaryTextLines={2} />
          {index !== this.props.sayings.length-1 ?
            <mui.ListDivider/>
          : null}
        </div>
      );
    }.bind(this));
    return (
      <mui.List className="sayingList">
        {mappedSayings}
      </mui.List>
    );
  }
});

module.exports = MappedSayings;
