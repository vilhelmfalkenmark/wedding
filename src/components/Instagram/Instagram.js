import React, { Component } from "react";
import { connect } from "react-redux";
// import heartSvg from "assets/svg/heart.svg";
import InstagramSkeleton from "components/Skeletons/InstagramSkeleton";
import WithStyles from "layout/WithStyles";

import { fetchInstagram } from "actions/instagram";
import {
  captionView,
  lowResolutionUrlView
  // likesView
} from "utils/selectors/instagram";
import s from "./Instagram.css";

class Instagram extends Component {
  componentWillMount() {
    this.props.fetchInstagram();
  }
  render() {
    const { instagram: { data, fulfilled, fetching } } = this.props;
    return fulfilled && !fetching ? (
      <ul className={s.list}>
        {data.data.map((image, index) => (
          <li key={index} className={s.item}>
            <figure
              style={{
                backgroundImage: `url(${lowResolutionUrlView(image)})`
              }}
              className={s.backgroundImage}
            >
              <span className={s.imageCaption}>{captionView(image)}</span>
            </figure>
            {/* <div className={s.imageInfo}>
              <figure>
                <p className={s.likesContainer}>
                  <span className={s.likesCount}>{likesView(image)}</span>
                  <img src={heartSvg} alt="likes" className={s.likesHeart} />
                </p>
              </figure>
            </div> */}
          </li>
        ))}
      </ul>
    ) : (
      <InstagramSkeleton />
    );
  }
}

const mapStateToProps = state => ({
  instagram: state.instagram
});

const mapDispatchToProps = dispatch => ({
  fetchInstagram: () => {
    dispatch(fetchInstagram());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  WithStyles(Instagram, s)
);
