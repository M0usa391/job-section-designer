
interface DateDisplayProps {
  date: string;
}

const DateDisplay = ({ date }: DateDisplayProps) => {
  return (
    <div className="container-fluid py-3 animate__animated animate__fadeInUp">
      <div className="row align-items-center">
        <div className="col-4">
          <button className="btn btn-glass rounded-circle p-2">
            <i className="bi bi-chevron-left text-white-50 fs-5"></i>
          </button>
        </div>
        
        <div className="col-4 text-center">
          <h2 className="fs-4 fw-bold text-white text-shadow">{date}</h2>
        </div>
        
        <div className="col-4 d-flex justify-content-end">
          <button className="btn btn-glass rounded-circle p-2">
            <i className="bi bi-chevron-right text-white-50 fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateDisplay;
