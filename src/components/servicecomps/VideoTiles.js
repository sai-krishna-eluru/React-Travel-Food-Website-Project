import videosdata from "./ServiceVideo";

var App = React.createClass({
  getInitialState: function () {
    return { src: videosdata.deer };
  },

  chooseVideo: function (newVideo) {
    this.setState({
      src: videosdata[newVideo],
    });
  },

  render: function () {
    return (
      <div>
        <h1>React Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  },
});

//--------------------------------------------
var Video = React.createClass({
  render: function () {
    return (
      <div>
        <video controls autoPlay src={this.props.src} />
      </div>
    );
  },
});
