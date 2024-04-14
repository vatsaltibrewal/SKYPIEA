import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Character NFT template</title>
        <meta property="og:title" content="Page - Character NFT template" />
      </Helmet>
    </div>
  )
}

export default Page
