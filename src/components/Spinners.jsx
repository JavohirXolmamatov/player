import { FiLoader } from "react-icons/fi";

function Spinners({ clasnames }) {
  return <FiLoader className={`animate-spin ${clasnames}`} />;
}

export default Spinners;
