import { Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-clinic-gold/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div id="logo-container" className="flex flex-col">
          <span className="text-2xl font-serif tracking-widest text-clinic-charcoal uppercase leading-none">Clínica Kátia Volpe</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-clinic-gold mt-1">tratamento 360</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-clinic-charcoal/70">
          <a href="#equipe" className="hover:text-clinic-gold transition-colors">Corpo Clínico</a>
          <a href="#contato" className="hover:text-clinic-gold transition-colors">Contato</a>
          <div className="h-4 w-px bg-clinic-gold/30"></div>
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-clinic-gold" />
                <span>{CONTACT_INFO.phone}</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
