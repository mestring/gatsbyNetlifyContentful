import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

import Gallery from './gallery'



class GalleryPage extends React.Component {
  render() {
    const gallery = this.props.data.contentfulGallery
    const Gallerytwo = (gallery) => (
      <div>
        <h3>{this.props.data.contentfulGallery.title}</h3>
        <ul>
          {this.props.data.contentfulGallery.images.map((image, i) => (
            <img
              key={i}
              alt={image.title}
              srcSet={image.sizes.srcSet}
              src={image.sizes.src}
              sizes={image.sizes.sizes}
            />
          ))}
        </ul>
         
      </div>
    )
    
    return (
      <div>
        <h1>{this.props.data.contentfulGallery.title}</h1>
        <Gallerytwo gallery={gallery} />


        <div><Link to="/">Go back to the homepage</Link></div>
      </div>
    )
  }
}

export default GalleryPage

export const galleryQuery = graphql`
  query galleryQuery( $id: String! ) {
    contentfulGallery(id: {eq: $id}) {
      id
      title
      images {
        id
        title
        sizes {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
  `
  