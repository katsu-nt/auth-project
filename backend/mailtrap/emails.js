import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email send successfully ", response);
  } catch (error) {
    throw new Error(`Error sending verification email: ${error}`);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "29889afd-8dbb-44ae-9d9e-f0fa75a12d71",
      template_variables: {
        company_info_name: "Le Hoang Company",
        name: name,
      },
    });
    console.log("Welcome Email send successfully ", response);
  } catch (error) {
    throw new Error(`Error sending verification email: ${error}`);
  }
};
