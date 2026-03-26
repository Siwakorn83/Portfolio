import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <h4>Email: ankpao06160@gmail.com</h4><br />
      <h4>Phone: 061-608-2857</h4>
    </section>
  )
}

export default Contact
