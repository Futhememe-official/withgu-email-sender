import { EmailHolder } from "@/components/email-holder";
import MyEmail from "../../../emails/my-email";

export default function Page() {
  return (
    <EmailHolder configuration={<>seila</>}>
      <MyEmail />
    </EmailHolder>
  );
}
