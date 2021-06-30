import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPerfil = () => (
  <ContentLoader 
    speed={2}
    width={250}
    height={320}
    viewBox="0 0 250 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#969ca0"
  >
    <rect x="-1" y="260" rx="2" ry="2" width="220" height="25" /> 
    <rect x="-8" y="0" rx="2" ry="2" width="250" height="250" /> 
    <rect x="-7" y="294" rx="2" ry="2" width="120" height="25" />
  </ContentLoader>
)

export default LoaderPerfil