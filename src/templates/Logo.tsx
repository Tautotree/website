import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg style={{width: 40, fill: 'green'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
        <path 
          d="M612.72,494.86v-208.05c0-27.12-14.47-52.18-37.95-65.74l-180.18-104.03c-23.49-13.56-52.42-13.56-75.91,0l-180.18,104.03c-23.49,13.56-37.95,38.62-37.95,65.74v208.05c0,27.12,14.47,52.18,37.95,65.74l180.18,104.03c23.49,13.56,52.42,13.56,75.91,0l180.18-104.03c23.49-13.56,37.95-38.62,37.95-65.74Z" />
        <path 
          d="M979.46,602.01v-149.69c0-27.11-14.46-52.15-37.93-65.7l-129.63-74.84c-23.47-13.55-52.4-13.55-75.87,0l-129.63,74.84c-23.47,13.55-37.93,38.6-37.93,65.7v149.69c0,27.11,14.46,52.15,37.93,65.7l129.63,74.84c23.47,13.55,52.4,13.55,75.87,0l129.63-74.84c23.47-13.55,37.93-38.6,37.93-65.7Z" />
        <rect  x="524.19" y="435.66" width="126.46" height="537.47" rx="35.2" ry="35.2" />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
