import { PropTypes } from 'prop-types';
//------------------------------------------------------//
export const ReviewsItem = ({ reviews }) => {
  const {
    author_details: { name, avatar_path },
    content,
  } = reviews;
  return (
    <>
      <img src={avatar_path?.slice(1)} alt={name} />
      <h3>Author: {name ? name : 'anonymus'}</h3>
      <blockquote style={{ backgroundColor: '#d5e6eb', padding: '10px' }}>
        {content}
      </blockquote>
      <hr />
    </>
  );
};

ReviewsItem.propTypes = {
  reviews: PropTypes.shape({
    avatar_path: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar_path: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }),
};
