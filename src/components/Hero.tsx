import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/elegant_clinic_background_hero_1779204158687.png" 
          alt="Clínica Kátia Volpe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-clinic-gold text-sm uppercase tracking-[0.4em] font-semibold mb-4 block">Bem-vindo à excelência</span>
            <h1 className="text-6xl md:text-8xl text-clinic-charcoal font-serif leading-[0.9] mb-8">
              Da beleza ao <br /> 
              <span className="italic text-clinic-gold">tratamento 360</span>
            </h1>
            <p className="text-lg text-clinic-charcoal/80 font-light max-w-xl mb-10 leading-relaxed">
              Cada paciente é acompanhado de forma individualizada, com protocolos que respeitam sua história, necessidades e objetivos, unindo tecnologia, conhecimento médico e um olhar atento à naturalidade e à saúde como um todo.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#equipe" 
                className="px-8 py-4 bg-clinic-charcoal text-white text-sm uppercase tracking-widest font-medium hover:bg-clinic-gold transition-colors duration-300"
              >
                Conheça Nossa Equipe
              </a>
              <a 
                href="#contato" 
                className="px-8 py-4 border border-clinic-charcoal text-clinic-charcoal text-sm uppercase tracking-widest font-medium hover:bg-clinic-charcoal hover:text-white transition-all duration-300"
              >
                 Localização
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
