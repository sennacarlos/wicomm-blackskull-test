import { SearchFormStyled } from "./style"
import searchIcon from "../../../assets/images/icons/search.svg"

export const SearchForm = () => {
    return (
        <SearchFormStyled>
            <input type="text" placeholder="Buscar"/>
            <button><img src={searchIcon}/></button>
        </SearchFormStyled>
    )
}