import PropTypes from "prop-types";

const LikeIcon = ({ isLiked }) => (
  <svg
    width="33"
    height="30"
    viewBox="0 0 33 30"
    className={isLiked ? "liked" : ""}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30.593 2.87674C28.9503 1.02158 26.6799 0 24.2 0C22.2519 0 20.4295 0.792709 18.9299 2.29234C17.9294 3.29285 17.1039 4.56496 16.5001 6.02617C15.8961 4.56496 15.0707 3.29291 14.0702 2.29234C12.5706 0.792709 10.7482 0 8.80011 0C6.32014 0 4.04978 1.02165 2.40713 2.8768C0.877336 4.60421 0 6.96358 0 9.34996C0 12.2154 0.867023 15.0434 2.5769 17.7558C3.931 19.9036 5.81419 21.983 8.17433 23.9362C12.1734 27.2457 16.1094 29.0276 16.275 29.1018C16.417 29.1655 16.583 29.1655 16.7249 29.1018C16.8906 29.0276 20.8265 27.2457 24.8256 23.9362C27.1857 21.983 29.0689 19.9036 30.423 17.7558C32.133 15.0434 33 12.2154 33 9.34996C33 6.96358 32.1227 4.60421 30.593 2.87674Z" />
  </svg>
);

export default LikeIcon;

LikeIcon.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};
