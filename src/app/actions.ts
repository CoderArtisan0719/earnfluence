'use server'

const { Resend } = require("resend");
const resend = new Resend("re_J7YLLpPM_MxX6K7cqtMCm2pVH3EwUjL5q");

export const sendVerification = async () => {
  const { data, error } = await resend.emails.send({
    from: "gustavo.bagegas@kibernum.com",
    to: "origindev0719@gmail.com",
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  console.log(data);
  
  if (error) {
    console.log(';',error);
  }
  return {data:JSON.stringify(data)};
};
