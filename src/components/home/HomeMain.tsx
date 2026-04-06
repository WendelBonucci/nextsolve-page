import InitialContent from "./InitialContent";
import AboutHome from "./AboutHome";
import SolutionHome from "./SolutionHome";

export default function HomeMain() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <InitialContent />
      <AboutHome />
      <SolutionHome />
    </main>
  );
}
