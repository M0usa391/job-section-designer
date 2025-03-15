
interface DailyDuaProps {
  dua: string;
}

const DailyDua = ({ dua }: DailyDuaProps) => {
  return (
    <div className="w-full px-6 py-5 animate-scale-in">
      <div className="w-full rounded-xl glass-card py-6 px-4">
        <div className="flex justify-between items-center mb-2">
          <div></div>
          <div className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 12.75H18.75C20.25 12.75 21 12 21 10.5V6C21 4.5 20.25 3.75 18.75 3.75H16.5C15 3.75 14.25 4.5 14.25 6V10.5C14.25 12 15 12.75 16.5 12.75Z" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.5 21.75H6.75C8.25 21.75 9 21 9 19.5V15C9 13.5 8.25 12.75 6.75 12.75H4.5C3 12.75 2.25 13.5 2.25 15V19.5C2.25 21 3 21.75 4.5 21.75Z" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-lg text-purple-300 font-medium mr-1">دعاء</span>
          </div>
        </div>
        
        <p className="text-right text-white font-medium leading-relaxed text-lg px-2">
          {dua}
        </p>
      </div>
    </div>
  );
};

export default DailyDua;
