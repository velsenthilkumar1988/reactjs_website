import React from 'react'
import {ImBooks, ImQuestion} from "react-icons/im"
import Question from './Question';


const Faq = () => {
  return (
    <section className='faq-sec'>
      
      <div className='container faq'>
        <ImBooks size={30} color='orange'/>
            <div className='title --mb-2'>
                <h1 className='--text-light'>FAQ</h1>
                <p className='--text-small --text-light'>WebReact Icons Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. </p>
            </div>
      </div>
      <div className='questions'>
        <Question/>
      </div>
    </section>
  )
}

export default Faq;
