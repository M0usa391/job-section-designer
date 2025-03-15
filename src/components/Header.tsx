
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // عند التحميل، نتحقق مما إذا كان المستخدم يفضل الوضع الليلي أو النهاري
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    
    // تطبيق الوضع الليلي/النهاري على عنصر html
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="container-fluid py-3 animate__animated animate__fadeIn">
      <div className="row align-items-center">
        <div className="col-4">
          <button className="btn btn-glass rounded-circle p-2">
            <i className="bi bi-question-circle text-white-50 fs-5"></i>
          </button>
        </div>
        
        <div className="col-4 text-center">
          <h1 className="fs-4 fw-bold text-white mb-0 text-shadow">سبها</h1>
        </div>
        
        <div className="col-4 d-flex justify-content-end gap-2">
          <button 
            className="btn btn-glass rounded-circle p-2"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <i className="bi bi-sun text-white-50 fs-5"></i>
            ) : (
              <i className="bi bi-moon text-white-50 fs-5"></i>
            )}
          </button>
          <button className="btn btn-glass rounded-circle p-2">
            <i className="bi bi-share text-white-50 fs-5"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
