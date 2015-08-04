var React = require('react');
//var Main = require('./presentationComponants/JSX/1.jsx');
var Main = require('./componants/main.jsx');



React.render(
  <div className="masterWrapper">
    <Main />
  </div>,
  document.getElementById('bootstraper')
);
