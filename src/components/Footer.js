import phone from '../assets/phone.svg'
import local from '../assets/icone-local.png'
import insta from '../assets/logo-insta.svg'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div>
            <footer className='rodape'>
                <div className='rodape-phone'>
                    <img src={phone} alt="Icone de telefone"/>
                    <p>Telefone (14) 99760-7065</p>
                </div>
                <div className='rodape-local'>
                    <img src={local} alt='Icone de localização'/>
                    <p>Rua: John Backus,19-50</p>
                </div>
                <div className='rodape-insta'>
                    <img src={insta} alt='Icone do instagram'/>
                    <p>codeXburguer</p>
                </div>
            </footer>
        </div>
    )
}