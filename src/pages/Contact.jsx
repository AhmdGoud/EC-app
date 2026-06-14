import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Contact from "../components/contact/Contact";

function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
