import React from "react"
import ContentLoader from "react-content-loader"

const UserCardLoader = () => {
    const loaderItems = [0, 1 ,2];

    return (
      <>
        {loaderItems.map(item => (
            <ContentLoader
                key={item} 
                speed={2}
                width={265}
                height={220}
                viewBox="0 0 265 220"
                backgroundColor="#f3f3f3"
                foregroundColor="#969ca0"
            >
                <rect x="0" y="0" rx="10" ry="10" width="265" height="220" />
            </ContentLoader>
        ))}
      </>
    )
}

export default UserCardLoader
