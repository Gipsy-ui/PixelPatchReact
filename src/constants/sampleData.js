// Sample data for repair requests - used across business components for demo/preview
export const SAMPLE_REQUEST = {
  id: '001',
  device: 'Samsung S25',
  deviceType: 'Smartphone',
  repairType: 'Screen Replacement',
  serviceType: 'Pickup',
  pickupAddress: '112, Normal Road, Baliwasan Zamboanga City',
  preferredTime: 'Oct 25, 2025',
  description: 'The screen of the phone is broken and it is not turning on.',
  status: 'pending',
  
  // Assessment info
  assessment: {
    deviceCondition: 'Not Good.',
    observedIssues: 'The phone might have internal problems.',
    recommendation: 'Overall it can be done.',
  },
  
  // Client info
  client: {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+63 9875567412',
  },
  
  // Transaction info
  transaction: {
    requestTime: '10-20-2025 09:18',
    paymentTime: '10-22-2025 10:41',
    paidBy: 'GCash',
  },
  
  // Quotation
  quotation: {
    laborFee: { amount: 500.00, currency: 'PHP' },
    parts: [
      { name: 'Samsung S25 Screen', quantity: 1, price: 4500.00, currency: 'PHP' },
      { name: 'Samsung Front Camera', quantity: 1, price: 2500.00, currency: 'PHP' },
    ],
    total: { amount: 5000.00, currency: 'PHP' },
    estimatedTime: '3-4 Days',
    warranty: { duration: 5, unit: 'Months' },
  },
  
  // Images
  referenceImages: [
    { url: 'https://placehold.co/100x150/e0f2fe/3b82f6?text=Front', alt: 'Phone Front' },
    { url: 'https://placehold.co/100x150/e0f2fe/3b82f6?text=Back', alt: 'Phone Back' },
  ],
  
  assessmentImages: [
    { url: 'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+1', alt: 'Assessment Image 1' },
    { url: 'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+2', alt: 'Assessment Image 2' },
    { url: 'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+3', alt: 'Assessment Image 3' },
  ],
};
