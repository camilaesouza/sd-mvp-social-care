export type Subject = {
  name: string;
  relativeName: string;
  relativeRelation: string;
  birthDate?: Date;
  cpf?: string;
  rg?: string;
  bornPlace?: string;
  originUnit?: string;
  destinationUnit?: string;
  contactPhone?: string;
  contactAddress?: string;
  religion?: string;
  skinColor?: string;
  addressState?: string;
  addressCity?: string;
  addressDistrict?: string;
  addressStreet?: string;
  addressNumber?: string;
  income?: string;
  familyBond?: string;
  chemicalDependency: string[];
  otherChemicalDependency?: string;
  articleSentence?: string;
  condemnationStatus?: string;
  lastSocialServiceDate?: Date;
};
