import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamShow extends Component {
  componentDidMount() {
    const {
      fetchStream,
      match: { params },
    } = this.props;

    fetchStream(params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
