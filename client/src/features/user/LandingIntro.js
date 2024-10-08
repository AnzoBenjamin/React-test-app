import TemplatePointers from "./components/TemplatePointers";
import { useDispatch, useSelector } from "react-redux";
function LandingIntro() {
  const role = useSelector((state) => state.role.role);
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">
            {role.charAt(0).toUpperCase() + role.slice(1)} application
          </h1>

          <div className="text-center mt-12">
            <img
              src="./intro.png"
              alt="Dashwind Admin Template"
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          <TemplatePointers />
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
