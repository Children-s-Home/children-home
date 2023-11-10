'use client'

import React from 'react'
import AuthorDetails from './AuthorDetails'
import MainArticle from './MainArticle'
import RelatedArticles from "./RelatedArticles"
import Thumbnail from './Thumbnail'

export default function Article(){
  return (
    <div className='main-article'>
      <Thumbnail/>
      <AuthorDetails/>
      <MainArticle/>
      <RelatedArticles/>
    </div>

  )
}
