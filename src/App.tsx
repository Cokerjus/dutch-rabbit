import {
  Chart,
  Disclaimer,
  Features,
  Footer,
  Jumbotron,
  Mission,
  RoadMap,
  Tokemonic,
  Utilities,
} from "./components";

export default function App() {
  return (
    <div>
      <Jumbotron />
      <Chart />
      <Tokemonic />
      <Features />
      <RoadMap />
      <Utilities />
      <Mission />
      <Disclaimer />
      <Footer />
    </div>
  );
}
