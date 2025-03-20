import error from "../assets/error.png";
function Error() {
  return (
    <div className="flex justify-center items-center">
      <img src={error} alt={error} className="object-fill" />
    </div>
  );
}

export default Error;
