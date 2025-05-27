import ContactComponent from "@/components/contact-components/ContactComponent";
import { getAboutData } from "@/services/public";

export const metadata = {
  title: "Portfolio | Contact",
  description: "Contact me",
};
export default async function ContactPage() {
  const { data } = await getAboutData();
  return <ContactComponent data={data[0]} />;
}
