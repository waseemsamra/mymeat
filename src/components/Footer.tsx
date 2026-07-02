import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-neutral-950 py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
    <div className="space-y-12">
      <div className="font-display text-3xl text-neutral-50 tracking-tighter">Marahib Food Stuff</div>
<p className="font-display italic text-neutral-400 max-w-xs">
          Premium wholesale importers of beef, mutton and lamb. Based in Dubai, sourcing globally from Australia, Pakistan, India and South Africa.
        </p>
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="material-symbols-outlined text-sm">phone</span>
            <span>+971 50 2778726</span>
          </div>
        </div>
      <div className="flex flex-wrap gap-8">
        <Link to="/" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Home
        </Link>
        <Link to="/beef-wholesale-dubai" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Beef Wholesale
        </Link>
        <Link to="/mutton-wholesale-dubai" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Mutton Wholesale
        </Link>
        <Link to="/beef-mutton-lamb-wholesale-dubai" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Wholesale Dubai
        </Link>
        <Link to="/beef-ribeye-technical-specs" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Technical Specs
        </Link>
        <Link to="/contact-wholesale-dubai" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
          Contact Dubai
        </Link>
      </div>
    </div>
    <div className="text-right flex flex-col items-end gap-12">
      <div className="flex gap-6">
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">language</span>
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">mail</span>
        <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">location_on</span>
      </div>
      <p className="text-neutral-600 text-[10px] tracking-widest uppercase">© 2024 Marahib Food Stuff - Beef, Mutton & Lamb Wholesale Dubai.</p>
    </div>
  </footer>
);

export default Footer;