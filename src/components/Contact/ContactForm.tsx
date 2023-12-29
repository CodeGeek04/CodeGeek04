// components/ContactForm.tsx

import React from "react";
import styles from "./ContactForm.module.css"; // Adjust the path accordingly

const ContactForm: React.FC = () => {
  return (
    <div>
      <div className={styles.contactFormContainer}>
        <form
          action="https://formspree.io/f/xkndngww"
          method="POST"
          className={styles.form}
        >
          <label className={styles.label}>
            Your Email:
            <input type="email" name="_replyto" className={styles.input} />
          </label>
          <label className={styles.label}>
            Message:
            <textarea name="message" className={styles.textarea}></textarea>
          </label>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
