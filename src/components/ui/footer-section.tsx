import React from "react";
import MailingList from "./mailing-list";
import ContactInfo from "./contact-info";
import { Separator } from "./separator";
import Footer from "./footer";

const FooterSection = () => {
  return (
    <React.Fragment>
      <div className="px-12 py-8 flex justify-between">
          <MailingList />
          <ContactInfo />
        </div>
      <Separator className="my-4 bg-pink-200 opacity-20" />
      <Footer />
    </React.Fragment>
  )
};

export default FooterSection;
