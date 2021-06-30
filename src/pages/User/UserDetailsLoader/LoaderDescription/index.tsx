import React from "react"
import ContentLoader from "react-content-loader"

const LoaderDescription = () => (
  <ContentLoader 
  speed={2}
  width={250}
  height={320}
  viewBox="0 0 250 320"
  backgroundColor="#f3f3f3"
  foregroundColor="#969ca0"
>
  <rect x="-8" y="0" rx="2" ry="2" width="250" height="250" /> 
  </ContentLoader>
)

export default LoaderDescription