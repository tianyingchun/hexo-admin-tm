module.exports = function (fetch, Child) {
  return class DataFetcher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentWillMount() {
      this.loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this.loadData(nextProps)
    }

    loadData(props) {
      var items = fetch(props.params)
      Object.keys(items).forEach((name) => {
        Promise.resolve(items[name]).then((data) => {
          if (!this.isMounted()) return
          var update = {}
          update[name] = data
          this.setState(update)
          if (this.dataDidLoad) {
            this.dataDidLoad(name, data)
          }
        })
      })
    }
    render() {
      <Child />
    }
  };
}

