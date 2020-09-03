import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo, inRoll = false }) => {
  const imageStyle = { borderRadius: '5px' };
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        className={inRoll ? 'post-image-preview' : ''}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        className={inRoll ? 'post-image-preview' : ''}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === 'string')
    return (
      <img
        style={imageStyle}
        src={image}
        className={inRoll ? 'post-image-preview' : ''}
        alt={alt}
      />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  inRoll: PropTypes.bool,
};

export default PreviewCompatibleImage;
