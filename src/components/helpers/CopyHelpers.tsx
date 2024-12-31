import { TypeAnimation } from "react-type-animation";
import "./CopyHelpers.scss";

const HomeHeadingText = () => {
  return (
    <TypeAnimation
      className="Copy-HomeHeading"
      sequence={[
        "Fluid UI's",
        1000,
        "Detail Oriented",
        1000,
        "Result Driven",
        1000,
        "Lifelong Learner",
        1000,
        "Let's Connect!",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "2em" }}
      repeat={Infinity}
    />
  );
};

export { HomeHeadingText };
