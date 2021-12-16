import style from './Contact.module.scss';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [message, setMessage] = useState<boolean>(false);
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className={style.contact} id='contact'>
      <div className={style.contact__left}>
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className={style.contact__right}>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' required />
          <textarea placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP;)</span>}
        </form>
      </div>
    </div>
  )
}
export default Contact;
