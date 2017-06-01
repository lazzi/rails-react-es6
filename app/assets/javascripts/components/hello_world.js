var propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default class HelloWorld extends React.Component {
  constructor( props ){
    super( props );
    this.state = { name: props.name };
  }

  render(){
    return (
      <div>
        <span>
          Neviem aky text: { this.props.name }!
        </span>
      </div>
    );
  }
}

HelloWorld.propTypes = propTypes;