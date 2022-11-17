import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bgImg from '../../../../assets/images/bg.png'


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  
    
    
  return (
    <header className="my-4 bg-contain py-16"
    style={{backgroundImage : `url(${bgImg})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 justify-around">
          <img
            src={chair} alt="dentist char"
            className="rounded-lg shadow-2xl md:w-4/5 lg:w-2/5"
          />
          <div className="">
       <DayPicker 
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
       />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
