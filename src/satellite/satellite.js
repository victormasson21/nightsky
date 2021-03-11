import './satellite.css';
import Icon from '../icon/icon';

const Satellite = ({ svg, alt, url, description }) => {
  return (
    <div class="hidden top-1/2 absolute left-1/2 m-8">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={svg} fill="pink" className="satellite-svg" alt={alt} />
      </a>
      <p class="hidden">{description}</p>
    </div>
  );
};

export default Satellite;
