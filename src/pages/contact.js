import * as React from "react";
import Layout from "../components/layout";
import "./contact.module.css";

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p>Thanks for watching. Please give me a message.</p>
      <form method="post" action="">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" required="required" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>

        <button type="submit">Send</button>
        {/* <input type="submit" value="Send" /> */}
        {/* <button type="reset">Clear</button> */}
        <input type="reset" value="Clear" />
      </form>
    </Layout>
  );
};

export default ContactPage;
