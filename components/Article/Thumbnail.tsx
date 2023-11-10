'use client'
import Image from "next/image"
import ArticleThmubnail from "/images/article_assets/article-thumbnail.png"

export default function Thumbnail(){
    return(
        <div className="article-thmubnail">
            <Image src={ArticleThmubnail} alt="thumbnail of article" />
        </div>
    )
}
