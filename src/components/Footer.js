import { useState } from 'react'
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('')

	function handleInput(e){
		setInputValue(e.target.value)
	}

	function handleBlur(){
		if (!inputValue.includes('@')){
			alert("attention, il n'y a pas d'@ , ceci n'est pas une adreesse valide")
		}
	}

    return(
        <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeHolder='Entrer votre adresse mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
    )
}

export default Footer
