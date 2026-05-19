import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contato" className="py-32 bg-clinic-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-clinic-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Contato</span>
            <h2 className="text-4xl md:text-5xl text-clinic-charcoal font-serif mb-8">Agende sua <span className="italic">experiência</span>.</h2>
            
            {CONTACT_INFO.description && (
              <p className="text-clinic-charcoal/70 leading-relaxed max-w-xl mb-12 italic">
                "{CONTACT_INFO.description}"
              </p>
            )}
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 pb-10 border-b border-clinic-gold/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-clinic-gold">
                   <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-clinic-gold mb-2">Endereço</h4>
                  <a 
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-clinic-charcoal/80 leading-relaxed max-w-sm block hover:text-clinic-gold transition-colors"
                  >
                    {CONTACT_INFO.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 pb-10 border-b border-clinic-gold/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-clinic-gold">
                   <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-clinic-gold mb-2">Telefones</h4>
                  <p className="text-clinic-charcoal/80">
                    Geral: {CONTACT_INFO.phone} <br />
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-clinic-gold">
                   <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-clinic-gold mb-2">Horário de Atendimento</h4>
                  <p className="text-clinic-charcoal/80">
                    {CONTACT_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Simple Map Placeholder with an image or stylized background */}
            <div className="absolute inset-0 bg-clinic-charcoal overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                 alt="Localização" 
                 className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-clinic-charcoal via-transparent to-transparent"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-clinic-gold/10"
                  >
                    <div className="w-8 h-8 bg-clinic-gold rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-clinic-charcoal">Ver no Google Maps</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
