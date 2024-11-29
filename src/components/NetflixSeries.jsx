import Seriesdata from "../api/Seriesdata.json";
import  SeriesCard  from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-3-columns">
      {Seriesdata.map((curEle) => {
        return <SeriesCard key={curEle.id} data={curEle}/>
      })}
    </ul>
  );
};

export default NetflixSeries;
