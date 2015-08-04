/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let MUIContext = {
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    //ThemeManager.setTheme(ThemeManager.types.DARK);
    new mui.Styles.ThemeManager().setPalette({
      accent1Color: Colors.deepOrange500
    });
  }
};

module.exports = MUIContext;
