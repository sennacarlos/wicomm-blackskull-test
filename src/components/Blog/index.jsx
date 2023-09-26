import { ButtonDefault } from "../../styles/buttons"
import { BlogStyled } from "./style"
import blogData from "../../utils/blogData"
import { ArticleCard } from "./ArticleCard"
import arrowLeft from "../../assets/images/icons/arrowLeft.svg"
import arrowRight from "../../assets/images/icons/arrowRight.svg"

export const Blog = () => {
    
    return (
       <BlogStyled>
            <div className="container">
                <div className="container-blog">
                    <h2 className="title">CONFIRA O <span className="title-emphasis">NOSSO BLOG</span></h2>
                    <ButtonDefault buttonSize="default">LER TODOS</ButtonDefault>
                </div>
                <ul className="articles-list">
                    {blogData.map(article =>
                        <ArticleCard key={article.id} article={article}/>    
                    )}
                </ul>
                <div className="carousel-container--product">
                    <button className="button-left-01">
                        <img src={arrowLeft}/>
                    </button>
                    <button className="button-right-01">
                        <img src={arrowRight}/>
                    </button>
                </div>
            </div>
       </BlogStyled>
    )
}