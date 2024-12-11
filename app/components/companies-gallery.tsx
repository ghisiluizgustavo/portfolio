
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function CompaniesGallery() {
  return (
    <>
      <h1>Projetos:</h1>
      <div className="flex bg-slate-800">
        <div className="m-5 bg-slate-700">
          <p>Porto (Sustentação)</p>
          <p>Java | Spring | SQL</p>
        </div>
        <div className="m-5 bg-slate-700">
          <p>Dock (Antifraude)</p>
          <p>Java | Spring | SQL</p>
        </div>
        <div className="m-5 bg-slate-700">
          <p>Dock (Antifraude)</p>
          <p>Java | Spring | SQL</p>
        </div>
      </div>
    </>
  );
}
