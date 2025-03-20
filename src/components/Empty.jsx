import empty from "../assets/empty.png";

function Empty() {
  return (
    <div className="flex justify-center items-center">
      <img src={empty} alt={empty} className="object-fill" />
    </div>
  );
}

export default Empty;
