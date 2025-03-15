
const Navigation = () => {
  return (
    <div className="fixed-bottom pb-4 pt-5 animate__animated animate__fadeInUp animate__delay-3s">
      <div className="container">
        <div className="row justify-content-around gx-0">
          <NavItem icon="bi-gear" label="الإعدادات" />
          <NavItem icon="bi-calendar-event" label="المناسبات" />
          <NavItem icon="bi-house" label="الأذكار" active />
          <NavItem icon="bi-book" label="القرآن" />
          <NavItem icon="bi-compass" label="القبلة" />
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => {
  return (
    <div className="col text-center">
      <button className="btn border-0 d-flex flex-column align-items-center">
        <div className={`rounded-circle d-flex align-items-center justify-content-center mb-1 p-2 ${
          active ? "bg-info bg-opacity-25" : "btn-glass"
        }`} style={{width: '40px', height: '40px'}}>
          <i className={`bi ${icon} ${active ? "text-info" : "text-white-50"} fs-5`}></i>
        </div>
        <span className={`small ${active ? "text-info" : "text-white-50"} fw-medium`}>
          {label}
        </span>
      </button>
    </div>
  );
};

export default Navigation;
