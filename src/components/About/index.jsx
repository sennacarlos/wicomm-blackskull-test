import { AboutStyled } from "./style"
import logo from "../../assets/images/logo2.svg"

export const About = () => {
    return (
        <AboutStyled>
            <img src={logo} alt="Logo BlackSkull"/>
            <h2 className="title-section">SOBRE A BLACK SKULL</h2>
            <p className="text-default--black">
                A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. 
                Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de 
                área construída, com alta capacidade produtiva. Nossos produtos trabalham 
                com as melhores matérias-primas do mercado e tem como principal característica 
                maior concentração de insumos, que proporcionam níveis de pureza mais altos e 
                por consequência otimizam a qualidade de nossos produtos.
            </p>
        </AboutStyled>
    )
}