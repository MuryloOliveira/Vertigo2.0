import Logo from '../images/Logo.png'
import v from '../images/v.png'
import e from '../images/e.png'
import r from '../images/r.png'
import t from '../images/t.png'
import i from '../images/i.png'
import g from '../images/g.png'
import o from '../images/o.png'

export function Logo() {
    return(
        <div>
            <img src={Logo} alt="Imagem da Logo" />
            <img src={v} alt="V" />
            <img src={e} alt="E" />
            <img src={r} alt="R" />
            <img src={t} alt="T" />
            <img src={i} alt="I" />
            <img src={g} alt="G" />
            <img src={o} alt="O" />
        </div>
    )

}