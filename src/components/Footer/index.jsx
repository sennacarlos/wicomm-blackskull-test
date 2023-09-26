import { FooterStyled } from "./style"
import logo from "../../assets/images/logo1.svg"
import social from "../../assets/images/social.svg"
import payment from "../../assets/images/payment.svg"
import security1 from "../../assets/images/security1.svg"
import { ButtonDefault } from "../../styles/buttons"
import wicommLogo from "../../assets/images/wicomm.svg"
import vetxLogo from "../../assets/images/vtex.svg"

export const Footer = () => {
    return (
        <FooterStyled>
            <div className="container">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footerInfos-company">
                            <img src={logo}/>
                            <ul>
                                <p>Nos siga:</p>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/blackskullusa/"><img src={social}/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footerInfos-institutional">
                            <div className="institutional-1">
                                <ul>
                                    <p>BLACKSKULL USA</p>
                                    <li>Sobre nós</li>
                                    <li>Black Skull é confiável?</li>
                                    <li>Atletas Black Skull</li>
                                    <li>Nosso Blog</li>
                                    <li>Seja um Revendedor</li>
                                    <li>Entre em contato</li>
                                </ul>
                                <ul>
                                    <p>INSTITUCIONAL</p>
                                    <li>Trocas e Devoluções</li>
                                    <li>Política de Entregas</li>
                                    <li>Política de Privacidade</li>
                                    <li>Política de Cancelamentos</li>
                                </ul>
                                <ul>
                                    <p>AFILIADOS</p>
                                    <li>Programa de Afiliados</li>
                                    <li>Desconto para Militares</li>
                                    <li>Benefícios para Profissionais de Saúde</li>
                                    <li>Benefícios para Profs. de Educação Física</li>
                                    <li>Assinaturas</li>
                                </ul>
                            </div>
                            <div className="institutional-2">
                                <ul>
                                    <p>FORMAS DE PAGAMENTO</p>
                                    <li><img src={payment}/></li>
                                </ul>
                                <ul>
                                    <p>SEGURANÇA</p>
                                    <li><img src={security1}/></li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <aside className="footer-right">
                        <div className="footer-newsletter">
                            <h2 className="title">FIQUE POR
                            <p className="title-emphasis">DENTRO</p>
                            </h2>
                            <p className="text-footer--small">
                                Inscreva-se e seja o primeiro a saber sobre as novidades, 
                                promoções e muito mais!
                            </p>
                            <form>
                                <input type="text" placeholder="Digite seu nome"></input>
                                <input type="text" placeholder="Digite seu e-mail"></input>
                                <ButtonDefault buttonSize="medium">ENVIAR</ButtonDefault>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="footer-company">
                <div className="footer-copyright container">
                    <p>Black Skull 2022. Todos os direitos reservados.</p>
                    <div>
                        <a href="http://wicomm.com.br/" target="_blank"><img src={wicommLogo}/></a>
                        <a href="https://vtex.com/br-pt/" target="_blank"><img src={vetxLogo}/></a>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}