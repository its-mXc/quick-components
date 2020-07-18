import React from 'react';
import {Image} from 'react-bootstrap'

const Avatar = ({image, diameter}) => {

  const imageSize = diameter || 100
  return (
    <Image src={`${image}/${imageSize}x${imageSize}`} roundedCircle />
  )
}

export default Notice