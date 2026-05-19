export interface Specialty {
  id: string;
  title: string;
  description: string;
  doctorName: string;
  whatsappNumber: string;
  imageUrl: string;
  crm?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: string;
  mapsUrl?: string;
  description?: string;
}
