interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings', 'Read car information', 'Create reviews', 'Create reports'],
  ownerAbilities: ['Manage company information', 'Manage car fleet', 'View bookings', 'View reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/eacb058f-6ff2-425c-a337-fc2fd091c892',
};
