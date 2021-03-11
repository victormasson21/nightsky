import Satellite from './satellite/satellite.js';
import { data } from './app.data';
import './app.css';

const App = () => {
  console.log('app.js - data.satellites 🌈 ', data.satellites);
  return (
    <div class="w-screen h-screen bg-blue-900">
      <div>
        {data.satellites.map(satellite => {
          return (
            <>
              <Satellite
                key={satellite.svg}
                svg={satellite.svg}
                alt={satellite.alt}
                url={satellite.url}
                description={satellite.description}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
