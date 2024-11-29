import NetflixSeries from "./components/NetflixSeries";
import "./components/NetflixList.css";
import { EventHandle } from "./components/EventHandling";
import {States} from "./components/Hooks/States";
import { DerivedStates } from "./components/DerivedStates";
import { LiftStateUp } from "./components/LiftStateUp";

export const App = () => {
  // return [<NetflixSeries key="1"/>, <NetflixSeries key="2"/>];
  return (
    <section className="container">
      <h1 className="card-heading">This is top10 Best Series List</h1>
      <NetflixSeries/>
      <EventHandle/>
      {/* <States/> */}
      {/* <DerivedStates/> */}
      {/* <LiftStateUp/> */}
    </section>
  );
};

