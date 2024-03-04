import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import StepForm from "./components/StepForm";

function App() {
  const FORM_STEPS = [
    {
      stepName: "Personal Info",
      component: () => <PersonalInfo />,
    },
    {
      stepName: "Shipping Info",
      component: () => <div className="formWrapper">Please add your shipping Info</div>,
    },
    {
      stepName: "Payment Info",
      component: () => <div className="formWrapper">Please add your payment Info</div>,
    },
    {
      stepName: "Delivered Info",
      component: () => <div className="formWrapper">Please add your delivered Info</div>,
    },
  ];
  return <div className="App"><StepForm stepsConfig = {FORM_STEPS} /></div>;
}

export default App;
