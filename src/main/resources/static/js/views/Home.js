import getMapbox, {getGeocoder, setGeocoderEvent, setMapLoadEvent} from "../Mapbox.js";
export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    //language=HTML
    return `<div id="map" style="min-height: 600px;"></div>
    `;
}
export function HomeEvents(){
    getMapbox();
    getGeocoder();
    setGeocoderEvent();
    setMapLoadEvent();
}

