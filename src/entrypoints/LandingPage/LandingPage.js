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
    Scroll.scroller.scrollTo("Main-content", {
      duration: 300,
      delay: 0,
      smooth: true
    });
  }

  render() {
    const { info } = this.props;

    return <DocumentTitle title={"Välkommen på bröllop 2 juni"}>
        <div className="Main-container--no-offset">
          <section className="LandingPage-hero-container" style={{ backgroundImage: `url(${Hero})` }}>
            <h1 className="LandingPage-hero-title">
              Vi gifter oss 2 juni!
            </h1>
            <button className="LandingPage-arrow" onClick={this.scrollToContent.bind(this)} />
          </section>
          {info.fulfilled ? 
          <section className="Main-inner" name="Main-content">
              <h2>{info.data.title}</h2>
              <p>{info.data.content}</p>
          </section> : null}
          <section className="GoogleMaps-wrapper">
            <div className="GoogleMaps-adress-wrapper">
              <h3>Vi kommer gifta oss på Carolas Eko</h3>
              <p>Adressen dit är: Lorem Ipsum dolor sit amet </p>
            </div>
            <GoogleMaps isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `600px` }} />} mapElement={<div style={{ height: `100%` }} />} />
          </section>
        </div>
      </DocumentTitle>;
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
