import { Specialty, ContactInfo } from './types';

export const DOCTORS: Specialty[] = [
  {
    id: 'katia-volpe',
    title: 'Ciência Dermatológica & Tratamento 360',
    description: 'Especialista em protocolos avançados de regeneração tecidual e saúde da pele, com foco em precisão científica e tecnologia de ponta.',
    doctorName: 'Dra. Kátia Volpe',
    crm: 'CRM 90.728 / RQE 66961',
    whatsappNumber: '5511998373520',
    imageUrl: '/images/regenerated_image_1779131899792.jpg',
  },
  {
    id: 'artur-guerra',
    title: 'Ortopedia & Cirurgia da Coluna',
    description: 'Especializado em Cirurgia da Coluna e Ortopedia, focado no diagnóstico preciso e recuperação funcional individualizada.',
    doctorName: 'Dr. Artur Guerra',
    crm: 'CRM 175727',
    whatsappNumber: '5511983601234',
    imageUrl: '/images/regenerated_image_1779131902482.jpg',
  },
  {
    id: 'patrick-carone',
    title: 'Metabolismo & Performance Científica',
    description: 'Especialista em otimização metabólica e estratégias de alta performance baseadas em evidências para resultados sustentáveis.',
    doctorName: 'Dr. Patrick Carone',
    crm: 'CRM 76633',
    whatsappNumber: '5532985258290',
    imageUrl: '/images/dr_patrick.png',
  },
  {
    id: 'lucas-luz',
    title: 'Nutrologia & Ciência Metabólica',
    description: 'Referência em medicina de precisão e protocolos metabólicos estratégicos, focados em performance celular e longevidade.',
    doctorName: 'Dr. Lucas Luz',
    crm: 'CRM 24377',
    whatsappNumber: '5511998373520',
    imageUrl: '/images/regenerated_image_1779131979703.png',
  },
  {
    id: 'natalia-capellasso',
    title: 'Tricologia & Tratamento Capilar 360',
    description: 'Especializada em abordagens personalizadas para queda de cabelo e saúde do couro cabeludo, unindo ciência dermatológica e tecnologias de ponta.',
    doctorName: 'Dra. Natália Capellasso',
    crm: 'CRM 215098',
    whatsappNumber: '5511971491253',
    imageUrl: '/images/regenerated_image_1779203460599.jpg',
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Cidade Jardim Corporate - Torre Continental - Av. Magalhães de Castro, 4800 - sala 202 - Cidade Jardim, São Paulo - SP, 05676-120',
  phone: '(11) 99837.3520',
  whatsapp: '(11) 99837.3520',
  email: 'contato@katiavolpe.com.br',
  workingHours: 'Segunda à Sexta, das 09:00 às 19:00',
  mapsUrl: 'https://maps.app.goo.gl/iPv1XitG8EkDzxbk7',
  description: 'Sob a supervisão da Dra. Kátia Volpe, CRM/SP 90.728 • RQE 66961, nossas unidades foram idealizadas para proporcionar uma experiência de cuidado completa e personalizada. Cada ambiente reflete a união entre sofisticação, acolhimento e excelência médica, oferecendo a atenção necessária para que você se sinta bem em cada etapa do seu tratamento. Um espaço pensado para valorizar sua beleza, seu bem-estar e sua longevidade com elegância e segurança.'
};
