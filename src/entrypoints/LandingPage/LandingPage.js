import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import GoogleMaps from "components/GoogleMaps";
import Hero from "assets/images/hero.jpg";
import { fetchInfo } from "actions/info";
import Scroll from "react-scroll";
import s from "./LandingPage.scss";
import arrowDown from "assets/svg/arrow-down.svg";

class LandingPage extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  scrollToContent() {
    Scroll.scroller.scrollTo("scroll-target", {
      duration: 300,
      delay: 0,
      smooth: true
    });
  }

  render() {
    const { info } = this.props;

    return (
      <DocumentTitle title={"Välkommen på bröllop 2 juni"}>
        <div className={s.container}>
          <section
            className={s.hero}
            style={{ backgroundImage: `url(${Hero})` }}
          >
            <h1 className={s.heroTitle}>Vi gifter oss 2 juni!</h1>
            <button
              className={s.scrollArrow}
              onClick={this.scrollToContent.bind(this)}
            >
              <img src={arrowDown} alt="arrow-to-content" />
            </button>
          </section>
          {info.fulfilled ? (
            <section className={s.infoContainer} name="scroll-target">
              <h2>{info.data.title}</h2>
              <p>{info.data.content}</p>
            </section>
          ) : null}
          <section className={s.mapWrapper}>
            <div className={s.mapAdressWrapper}>
              <h3>Vi kommer gifta oss på Carolas Eko</h3>
              <p>Adressen dit är: Lorem Ipsum dolor sit amet </p>
            </div>
            <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </section>
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
