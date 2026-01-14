import iconError from "../assets/img/icon-error.svg";
import iconRetry from "../assets/img/icon-retry.svg";
function ErrorStates() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={iconError} alt="" className="w-8 m-6" />
      <h1 className="title-error text-4xl">Something went wrong</h1>

      <p className="description-error m-6">
        We couldn't connect to the server(API error). Please try again in few
        moments.
      </p>
      <div className="flex items-center gap-3 retry-btn py-2 px-3 rounded-lg">
        <img src={iconRetry} alt="" className="w-5 h-5" />
        <button className="">Retry</button>
      </div>
    </div>
  );
}

export default ErrorStates;
