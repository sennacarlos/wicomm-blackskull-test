import { ButtonDefault } from "../../../styles/buttons"
import { ArticleCardStyled } from "./style"

export const ArticleCard = ({ article }) => {
    return (
        <ArticleCardStyled>
            <img src={article.img}/>
                <div>
                    <span className="text-blog--date">{article.date}</span>
                    <p className="text-blog">{article.title}</p>
                    <ButtonDefault buttonSize="default">LER MAIS</ButtonDefault>
                </div>
        </ArticleCardStyled>
    )
}