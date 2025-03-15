
interface DailyDuaProps {
  dua: string;
}

const DailyDua = ({ dua }: DailyDuaProps) => {
  return (
    <div className="container-fluid py-3 animate__animated animate__zoomIn">
      <div className="card btn-glass p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div></div>
          <div className="d-flex align-items-center">
            <i className="bi bi-quote text-purple-300 fs-5 me-1"></i>
            <span className="fs-5 text-purple-300 fw-medium">دعاء</span>
          </div>
        </div>
        
        <p className="text-end text-white fw-medium lh-lg fs-5 px-2">
          {dua}
        </p>
      </div>
    </div>
  );
};

export default DailyDua;
