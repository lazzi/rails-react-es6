export default class Tabs extends React.Component {
  displayName: 'Tabs'

  constructor(props) {
    super(props);
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children}
      </div>
    );
  }

  render(){
    return (
       <div className="tabs"></div>
    );
  }
}

