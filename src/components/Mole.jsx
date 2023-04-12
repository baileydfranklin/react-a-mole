import { useEffect } from "react"
import mole from '../embeded/mole.png'

const RAND_DEFAULT = 5000
const RAND_MINIMUM = 2000



export default function Mole({ onMoleClick, setIsShowing }) {

    useEffect(() => {
        let randMills = Math.ceil(
            Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMills)

        return () => clearTimeout(timer)
    });


    return (
        <div>
            <img
                style={{ 'width': '30vw' }}
                src={mole}
                onClick={onMoleClick}
            />
        </div>
    )
}