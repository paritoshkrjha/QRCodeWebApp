function Stepper({props}) {
  return (
    <ul className="steps my-5">
      <li data-content="?" className="step step-primary">
        Basic Details
      </li>
      <li data-content="!" className="step step-primary ">
        Contact Number
      </li>
      <li data-content="✓" className="step step-primary">
        Validation
      </li>
    </ul>
  );
}

export default Stepper;
