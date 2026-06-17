import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-neutral-950 py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
    <div className="space-y-12">
      <div className="font-display text-3xl text-neutral-50 tracking-tighter">Wahat Al Zaad Meat</div>
<p className="font-display italic text-neutral-400 max-w-xs">
         Premium wholesale importers and purveyors of fine heritage meats. Setting the standard for quality across three continents.
       </p>
       <div className="mt-6 space-y-2">
         <div className="flex items-center gap-2 text-neutral-400">
           <span className="material-symbols-outlined text-sm">location_on</span>
           <span>Dubai, UAE</span>
         </div>
         <div className="flex items-center gap-2 text-neutral-400">
           <span className="material-symbols-outlined text-sm">phone</span>
           <span>+971 56 191 0177</span>
         </div>
       </div>
      <div className="flex flex-wrap gap-8">
        <Link to="/" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Provenance
        </Link>
        <Link to="/wholesale" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Wholesale Logistics
        </Link>
        <Link to="/technical-catalog" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Technical Catalog
        </Link>
        <Link to="/contact" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Privacy Ledger
        </Link>
      </div>
    </div>
    <div className="text-right flex flex-col items-end gap-12">
      <div className="flex gap-6">
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">language</span>
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">mail</span>
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">location_on</span>
      </div>
      <p className="text-neutral-600 text-[10px] tracking-widest uppercase">© 2024 Wahat Al Zaad Meat.</p>
    </div>
  </footer>
);

export default Footer;
