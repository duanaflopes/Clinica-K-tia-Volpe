import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTORS } from '../constants';

export default function Specialties() {
  return (
    <section id="equipe" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-clinic-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Corpo Clínico</span>
            <h2 className="text-4xl md:text-5xl text-clinic-charcoal font-serif">Investigação <span className="italic">científica</span> e expertise médica.</h2>
          </div>
          <p className="text-sm text-clinic-charcoal/60 uppercase tracking-widest max-w-xs text-right leading-loose">
            Excelência médica e atendimento humanizado em cada especialidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-clinic-cream">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.doctorName} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-clinic-charcoal/0 group-hover:bg-clinic-charcoal/20 transition-all duration-500"></div>
                <div className="absolute bottom-6 right-6">
                   <a 
                     href={`https://wa.me/${doctor.whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20${encodeURIComponent(doctor.doctorName)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-white text-clinic-gold rounded-full flex items-center justify-center shadow-lg transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-clinic-gold hover:text-white"
                   >
                     <MessageCircle className="w-5 h-5" />
                   </a>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-clinic-gold block mb-1">{doctor.title}</span>
                <h3 className="text-2xl font-serif text-clinic-charcoal group-hover:text-clinic-gold transition-colors">{doctor.doctorName}</h3>
              </div>
              <p className="text-sm text-clinic-charcoal/60 font-light mb-6 leading-relaxed">
                {doctor.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-clinic-gold/10">
                <span className="text-[10px] uppercase tracking-wider text-clinic-charcoal/40 font-medium">
                  {doctor.crm}
                </span>
                <a 
                  href={`https://wa.me/${doctor.whatsappNumber}`} 
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-clinic-charcoal hover:text-clinic-gold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
