var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>天气情况</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>关于</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>例子</Link>
    </div>
  );
};

module.exports = Nav;
