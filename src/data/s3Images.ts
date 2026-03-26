// S3 Image URLs Configuration
// All homepage images hosted on S3

export const S3_BUCKET = 'agrofeed-content-agrofeed-536217686312';
export const S3_BASE_URL = `https://${S3_BUCKET}.s3.amazonaws.com`;

export const HOMEPAGE_S3_IMAGES = {
  // Hero Section
  heroMain: `${S3_BASE_URL}/hero/f6aa9714-0d85-4cff-88c2-aaa7247604a1-1774518226715.jpg`,
  
  // Portfolio Section
  portfolioRiceSpices: `${S3_BASE_URL}/portfolio/cf6c1554-62a4-4494-862d-8577fb1e6447-1774518226717.jpg`,
  portfolioCitrus: `${S3_BASE_URL}/portfolio/6be30d9f-7a3d-40d7-9215-19d1ce3f8c8c-1774518226719.jpg`,
  portfolioGrains: `${S3_BASE_URL}/portfolio/28d41399-d429-475e-8a62-a2ebb1e139be-1774518228986.jpg`,
  portfolioProduce: `${S3_BASE_URL}/portfolio/789103b7-1d2f-40ee-951d-3ce8d0486e95-1774518228988.jpg`,
  
  // Leadership Section
  leadershipCeo: `${S3_BASE_URL}/leadership/c0b0a2d8-f24d-43b9-b150-af35d24f7d08-1774518228992.jpg`,
  
  // Infrastructure Section
  infrastructureLogistics: `${S3_BASE_URL}/infrastructure/0083ad2b-3b28-45bb-b9c5-d95ae79dd643-1774518229772.jpg`,
  
  // Global Network Section
  networkMap: `${S3_BASE_URL}/network/20b45e54-dee7-463d-87fd-16ea6878803f-1774518229780.jpg`,
  
  // CSR Section
  csrSoilHands: `${S3_BASE_URL}/csr/f36390fa-c7dd-4e1d-8e35-48e5670b9a88-1774518229784.jpg`,
  csrSolarPanels: `${S3_BASE_URL}/csr/b8151c1e-62fd-4878-ad4a-e510610ebcbf-1774518230471.jpg`,
  
  // News Section
  newsGenevaMeeting: `${S3_BASE_URL}/news/497c60de-df71-4d34-b2ea-4d326be0e63e-1774518230477.jpg`,
  newsAgriLab: `${S3_BASE_URL}/news/b288104e-8c58-40b1-a2ef-8fe325eb3061-1774518230480.jpg`,
  newsCoffeeHandshake: `${S3_BASE_URL}/news/ad745345-9aa8-4731-866a-c184b353eec5-1774518231309.jpg`,
  
  // CTA Section
  ctaWheatPattern: `${S3_BASE_URL}/cta/8b0d7743-96cb-498e-b8d4-17a99060f630-1774518231312.jpg`
};

export default HOMEPAGE_S3_IMAGES;
