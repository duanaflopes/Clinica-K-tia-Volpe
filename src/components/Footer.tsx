import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif tracking-widest uppercase leading-none">Clínica Kátia Volpe</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-clinic-gold mt-2">tratamento 360</span>
            </div>
            <p className="text-white/50 font-light text-sm max-w-sm leading-relaxed">
              Referência em protocolos regenerativos e ciência dermatológica, oferecendo tratamentos 360 personalizados com tecnologia de ponta em São Paulo.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-clinic-gold mb-8">Nossas Unidades</h4>
            <ul className="space-y-4 text-xs tracking-widest text-white/70 uppercase">
              <li>Cidade Jardim (SP)</li>
              <li>Alphaville (SP)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-clinic-gold mb-8">Siga-nos</h4>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/clinicakatiavolpe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-clinic-charcoal transition-all duration-300"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.1em] text-white/30 font-medium">
          <p>© {currentYear} Clínica Kátia Volpe. Todos os direitos reservados.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
