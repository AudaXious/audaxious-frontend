import { Link } from "react-router-dom";
import FormCheckboxCard from "../FormCheckBoxCard";

const services = [
  {
    title: "Earn rewards",
  },
  {
    title: "Boost engagements",
  },
  {
    title: "Learn new things",
  },
  {
    title: "Promote Product/Business",
  },
  {
    title: "Create cummunity",
  },
  {
    title: "Nothing really",
  },
  {
    title: "Other",
  },
];

const Intension = ({
  state,
  handleCheckboxChange,
  prevHandler,
  nextHandler,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mt-14">
        {services.map((service, i) => (
          <FormCheckboxCard
            key={i}
            title={service.title}
            // img={service.img}
            onClick={handleCheckboxChange}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row mt-14 md:mt-20">
        {/* <div className="flex items-center justify-between gap-4 md:order-2"> */}
        <button
          className="btn btn--outline"
          type="button"
          onClick={prevHandler}
        >
          Previous
        </button>

        <button
          className="pr-5 btn btn--primary md:order-2"
          type="button"
          onClick={nextHandler}
          //   disabled={
          //     state.service.length === 0

          //   }
        >
          Next
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.293 3.29279C10.4805 3.10532 10.7348 3 11 3C11.2652 3 11.5195 3.10532 11.707 3.29279L17.707 9.29279C17.8945 9.48031 17.9998 9.73462 17.9998 9.99979C17.9998 10.265 17.8945 10.5193 17.707 10.7068L11.707 16.7068C11.5184 16.8889 11.2658 16.9897 11.0036 16.9875C10.7414 16.9852 10.4906 16.88 10.3052 16.6946C10.1198 16.5092 10.0146 16.2584 10.0123 15.9962C10.01 15.734 10.1108 15.4814 10.293 15.2928L14.586 10.9998H3C2.73478 10.9998 2.48043 10.8944 2.29289 10.7069C2.10536 10.5194 2 10.265 2 9.99979C2 9.73457 2.10536 9.48022 2.29289 9.29268C2.48043 9.10514 2.73478 8.99979 3 8.99979H14.586L10.293 4.70679C10.1055 4.51926 10.0002 4.26495 10.0002 3.99979C10.0002 3.73462 10.1055 3.48031 10.293 3.29279Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Intension;
