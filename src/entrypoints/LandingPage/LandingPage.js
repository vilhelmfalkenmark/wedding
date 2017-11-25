import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import GoogleMaps from "components/GoogleMaps";
import Hero from "assets/images/hero.jpg";
import { fetchInfo } from "actions/info";
import Scroll from "react-scroll";

class LandingPage extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  scrollToContent() {
    Scroll.animateScroll.scrollTo(100, {
      duration: 300
    });
  }

  render() {
    const { info } = this.props;

    return (
      <DocumentTitle title={"Välkommen på bröllop 2 juni"}>
        <div className="Main-container--no-offset">
          <div
            className="LandingPage-hero-container"
            style={{
              backgroundImage: `url(${Hero})`
            }}
          >
            <h1 className="LandingPage-hero-title">Vi gifter oss 2 juni!</h1>
            {/* <SVG icon={ArrowDown} /> */}
            <div
              className="LandingPage-arrow"
              onClick={this.scrollToContent.bind(this)}
            />
          </div>
          {info.fulfilled ? (
            <div className="Main-inner">
              <h2>{info.data.title}</h2>
              <p>{info.data.content}</p>
            </div>
          ) : null}

          <GoogleMaps
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA&v=3.exp&libraries=geometry,drawing,places"
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
