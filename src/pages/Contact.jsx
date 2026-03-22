import HeroContact from "../feature/contact/HeroContact";
import GetInTouch from "../components/container/GetInTouch";
import FormC from "../feature/contact/FormC";

function Contact() {
  return (
    <section className="relative z-10 min-h-screen w-full overflow-hidden px-6 py-16 md:px-10 md:py-20 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(30,60,120,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_30%,rgba(20,40,90,0.12)_0%,transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        <HeroContact />

        <div className="grid w-full max-w-6xl items-start gap-10 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-14">
          <div className="w-full">
            <GetInTouch />
          </div>

          <div className="w-full">
            <FormC />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
