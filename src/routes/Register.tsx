// react-icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// components
import UserForm from "../components/UserForm";
import PersonalData from "../components/PersonalData";
import TermServices from "../components/TermServices";

// hook
import { useForm } from "../hooks/useForm";

const Register = () => {
  const formComponents = [<UserForm />, <PersonalData />, <TermServices />];

  const { changeStep, currentComponent, currentStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="form_container">
      <p>steps</p>
      <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
        <div className="inputs_container">{currentComponent}</div>
        <div className="actions">
          <button onClick={() => console.log("helo")}>
            <GrFormPrevious />
            <span>Back</span>
          </button>
          <button type="submit">
            <span>Advance</span>
            <GrFormNext />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
