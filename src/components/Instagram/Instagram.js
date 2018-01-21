import React, { Component } from "react";
import { connect } from "react-redux";
import heartSvg from "assets/svg/heart.svg";
import InstagramSkeleton from "./InstagramSkeleton";

import { fetchInstagram } from "actions/instagram";
import {
  captionView,
  lowResolutionUrlView,
  likesView
  // userView
} from "utils/selectors/instagram";
import s from "./Instagram.scss";

class Instagram extends Component {
  componentWillMount() {
    this.props.fetchInstagram();
  }
  render() {
    const { instagram: { data, fulfilled, fetching } } = this.props;
    console.log(data);

    return fulfilled && !fetching ? (
      <ul className={s.list}>
        {data.data.map((image, index) => (
          <li key={index} className={s.item}>
            <img
              src={lowResolutionUrlView(image)}
              alt={captionView(image)}
              className={s.image}
            />
            <div className={s.imageInfo}>
              <figure>
                <p className={s.likesContainer}>
                  <span className={s.likesCount}>{likesView(image)}</span>
                  <img src={heartSvg} alt="likes" className={s.likesHeart} />
                </p>
                {/* <p className={s.poster}>{userView(image)}</p> */}
              </figure>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
