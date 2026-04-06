import InitialContent from "./InitialContent";
import AboutHome from "./AboutHome";
import Service from "./ServiceHome";
import SolutionHome from "./SolutionHome";

export default function HomeMain() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <InitialContent />
      <AboutHome />
      <Service />
      <SolutionHome />
    </main>
  );
}
