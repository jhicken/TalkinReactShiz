var React = require('react');
var mui = require('material-ui');

var SayingAdder = React.createClass({
  submitSaying: function() {
    this.props.addSaying(this.getFormValues());
    this.resetFormValues();
  },
  resetFormValues: function() {
    this.refs.person.setValue('');
    this.refs.title.setValue('');
    this.refs.saying.setValue('');
  },
  getFormValues: function() {
    return {
      person: this.refs.person.getValue(),
      sayingTitle: this.refs.title.getValue(),
      saying: this.refs.saying.getValue()
    };
  },
  render: function() {
    return (
      <div className="addSayings">
        <mui.TextField
          floatingLabelText="Who does the saying come from?"
          fullWidth={true}
          ref="person"/>
        <mui.TextField
          floatingLabelText="What's the saying's title?"
          fullWidth={true}
          ref="title"/>
        <mui.TextField
          floatingLabelText="What's the saying?"
          fullWidth={true}
          ref="saying"/>
        <mui.RaisedButton
          label="Add Saying"
          primary={true}
          fullWidth={true}
          onClick={this.submitSaying}/>
      </div>
    );
  }
});

module.exports = SayingAdder;
