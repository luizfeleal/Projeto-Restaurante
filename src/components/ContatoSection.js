import React from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import './Contato.css';


function ContatoSection() {
    function enviarEmail(e) {
        e.preventDefault();

    emailjs.sendForm('GmailContact', 'template_92shy5s', e.target, 'user_otMdAfw89j4Ftzm9yS9Wp')
      .then((result) => {
          alert('Mensagem enviada :)')
      }, (error) => {
          console.log(error)
      });
      e.target.reset();
    }

    return (
        <div className='container'>
            <div className="text1">
                <div className='title'>
                    <h1>Fale Conosco</h1>
                </div>
                <div className='text2'>
                    <p>Preencha com seus dados e mande sua mensagem. Respoderemos assim que possível.</p>
                </div>
            </div>
                    <form onSubmit={enviarEmail} class="form-floating">
                        <div class="row g-3">
                            <label for="floatingInputValue">Nome:</label>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" name='name'/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" name='name'/>
                            </div>
                        </div>

                        <div className='row g-3 email'>
                            <label for="floatingInputValue">Email:</label>
                            <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" name='email'/>
                        </div>

                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name='message'></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>

                        <div className='button'><button type='submit'>ENVIAR</button></div>
                    </form>
            </div>
    )
}

export default ContatoSection;