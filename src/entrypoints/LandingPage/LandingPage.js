import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import GoogleMaps from "components/GoogleMaps";
import Hero from "components/Hero";
import { fetchInfo } from "store/info/actions";
import copy from "utils/copy";
import Scroll from "react-scroll";
import WithStyles from "layout/WithStyles";

import s from "./LandingPage.css";

class LandingPage extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }

  scrollToContent() {
    const offset = window.innerWidth > 900 ? -112 : 0;
    Scroll.scroller.scrollTo("scroll-target", {
      duration: 300,
      delay: 0,
      smooth: true,
      offset
    });
  }

  render() {
    const { info } = this.props;
    return (
      <DocumentTitle title={`Välkommen på bröllop ${copy.weddingDate}`}>
        <main className={s({ container: true })}>
          <Hero
            scrollToContent={this.scrollToContent.bind(this)}
            infoFulfilled={info.fulfilled}
          />
          <section className={s({ infoContainer: true })} name="scroll-target">
            {info.fulfilled ? (
              <div className={s.infoCard}>
                <article className={s.infoContent}>
                  <h2>{info.data.title}</h2>
                  <p>{info.data.content}</p>
                </article>
              </div>
            ) : null}
          </section>
          <section className={s({ mapWrapper: true })}>
            <div className={s.mapAdressWrapper}>
              <h3>Vi kommer gifta oss på {copy.location.title}</h3>
              <p>Adress: {copy.location.address} </p>
              <a
                href={`${copy.location.websiteUrl}`}
                target="_blank"
                className={s.link}
              >
                {copy.location.prettyUrl}
              </a>
            </div>
            <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </section>
        </main>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyles(LandingPage, s));
