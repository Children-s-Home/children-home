'use client'
import ArticleThmubnail from "/images/article_assets/article-thumbnail.png"

export default function Thumbnail(){
    return(
        <div className="article-thmubnail">
            <img src={ArticleThmubnail} alt="thumbnail of article" />
        </div>
    )
}
