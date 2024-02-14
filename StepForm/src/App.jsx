import "./App.css";
import StepForm from "./components/StepForm";

function App() {
  const FORM_STEPS = [
    {
      stepName: "Personal Info",
      component: () => <div>Please add your personal Info</div>,
    },
    {
      stepName: "Shipping Info",
      component: () => <div>Please add your shipping Info</div>,
    },
    {
      stepName: "Payment Info",
      component: () => <div>Please add your payment Info</div>,
    },
    {
      stepName: "Delivered Info",
      component: () => <div>Please add your delivered Info</div>,
    },
  ];
  return <div className="App"><StepForm stepsConfig = {FORM_STEPS} /></div>;
}

export default App;
