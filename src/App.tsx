import {
  Chart,
  Features,
  Jumbotron,
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
    </div>
  );
}
