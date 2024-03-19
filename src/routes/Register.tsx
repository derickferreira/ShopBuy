// css
import classes from "./style/Register.module.css";

// react-icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// components
import UserForm from "../components/UserForm";
import PersonalData from "../components/PersonalData";
import TermServices from "../components/TermServices";
import Steps from "../components/Steps";

// hook
import { useForm } from "../hooks/useForm";

const Register = () => {
  const formComponents = [<UserForm />, <PersonalData />, <TermServices />];

  const { changeStep, currentStep, currentComponent, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className={classes.form_container}>
      <Steps currentStep={currentStep} />
      <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
        <div className={classes.inputs_container}>{currentComponent}</div>
        <div className={classes.actions}>
          {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>
                <GrFormPrevious />
                Back
              </span>
            </button>
          )}
          {!isLastStep ? (
            <button type="submit">
              <span>
                Advanced
                <GrFormNext />
              </span>
            </button>
          ) : (
            <button type="submit">
              <span>Create Account</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
