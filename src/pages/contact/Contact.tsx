import { Helmet } from "react-helmet";
import contact from "../../assets/contact/Frame 858.png";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { useForm } from "@formspree/react";

interface Iprops {}

const Contact = ({}: Iprops) => {
  const [state, handleSubmit] = useForm("mjvnlzed");

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row  gap-x-6 py-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div >
        <img src={contact} alt="" />
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            className="border-[1px] px-4 py-2 rounded-lg"
            type="email"
            placeholder="Your Email"
            name="email"
            required
            id="email"
          />
          <TextArea
            id="message"
            name="message"
            required
            placeholder="Your Message"
          />
          <div className="flex justify-end">
            <div className="flex-col">
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Submitting..." : "Send Message"}
              </Button>
              {state.succeeded && (
                <h3>Your message has been sent successfully ✅</h3>
              )}
              {state.errors && <h3>try again ❌</h3>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
