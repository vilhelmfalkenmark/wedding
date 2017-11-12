import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import GoogleMaps from "components/GoogleMaps";
import Hero from "assets/images/hero.jpg";
import { fetchInfo } from "actions/info";

class LandingPage extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  render() {
    const { info } = this.props;

    return (
      <DocumentTitle title={"Välkommen på bröllop 2 juni"}>
        <div>
          <div
            className="LandingPage-hero-container"
            style={{
              backgroundImage: `url(${Hero})`
            }}
          >
            <h1 className="LandingPage-hero-title">Vi gifter oss 2 juni!</h1>
          </div>
          {info.fulfilled ? (
            <div className="Main-inner">
              <h2>{info.data.title}</h2>
              <p>{info.data.content}</p>
            </div>
          ) : null}

          <GoogleMaps
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  info: state.info
});

const mapDispatchToProps = dispatch => ({
  fetchInfo: () => {
    dispatch(fetchInfo());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
