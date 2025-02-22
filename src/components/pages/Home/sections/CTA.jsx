import RaisingHands from "../../../../assets/images/raising-hands.webp";

const CTA = () => {
  return (
    <section>
      <div className="container border-y border-dark-2 py-12">
        <h2 className="flex items-center gap-2 mb-4 md:mb-8 leading-none">
          <img src={RaisingHands} alt="" className="w-9 -translate-y-2" />
          Let's Collaborate
        </h2>
        <h2>
          Feel free to reach out with any questions or ideas via LinkedIn or
          email.{" "}
          <span className="font-semibold">Can't wait to hear from you!</span>.
        </h2>
      </div>
    </section>
  );
};

export default CTA;
