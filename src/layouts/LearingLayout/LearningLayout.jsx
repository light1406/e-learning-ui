import LearningSidebar from "../components/LearningSidebar";
import Header from "../components/Header"

const LearningLayout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="container py-24 flex">
        <div className="ml-16 flex-1">{props.children}</div>
        <LearningSidebar />
      </div>
    </div>
  );
};

export default LearningLayout;
