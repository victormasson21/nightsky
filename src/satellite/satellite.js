import './satellite.css';
import Icon from '../icon/icon';

const Satellite = ({ svg, alt, url, description }) => {
  return (
    <div className="satellite-wrapper" class="w-1">
      <a
        className="satellite-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name={svg}
          width="3rem"
          fill="pink"
          className="satellite-svg"
          alt={alt}
        />
      </a>
      <p style={{ display: 'none' }}>{description}</p>
    </div>
  );
};

export default Satellite;
