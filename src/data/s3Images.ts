// S3 Image URLs Configuration
// All homepage images hosted on S3

export const S3_BUCKET = 'agrofeed-content-agrofeed-536217686312';
export const S3_BASE_URL = `https://${S3_BUCKET}.s3.amazonaws.com`;

export const HOMEPAGE_S3_IMAGES = {
  // Hero Section
  heroMain: `${S3_BASE_URL}/hero/49ed6dd4-0a37-47c8-acf0-c1f3ba417e73-1774530690691.jpg`,

  // Portfolio Section
  portfolioRiceSpices: `${S3_BASE_URL}/portfolio/8fe26692-fba8-4eb0-9df6-48c683948968-1774530690686.jpg`,
  portfolioCitrus: `${S3_BASE_URL}/portfolio/15cdf0ec-69a9-4bd4-ae0f-99bf26d52ae9-1774530690679.jpg`,
  portfolioGrains: `${S3_BASE_URL}/portfolio/8a48f0c5-c89f-4338-a60f-2114c926be11-1774530694535.jpg`,
  portfolioProduce: `${S3_BASE_URL}/portfolio/009ab05c-3153-422e-9410-fa2aec40f982-1774530694541.jpg`,

  // Leadership Section
  leadershipCeo: `${S3_BASE_URL}/leadership/30799e60-aa34-454b-8f6f-b0833a55024c-1774530694532.jpg`,

  // Infrastructure Section
  infrastructureLogistics: `${S3_BASE_URL}/infrastructure/3b564844-9aa5-4b43-805a-3a8d1d3ef64c-1774530695612.jpg`,

  // Global Network Section
  networkMap: `${S3_BASE_URL}/network/ab8208b3-2d50-4923-be33-2f42274653ac-1774530695615.jpg`,

  // CSR Section
  csrSoilHands: `${S3_BASE_URL}/csr/fa7f89d2-fbba-4385-a1bd-246ba63b45f4-1774530695621.jpg`,
  csrSolarPanels: `${S3_BASE_URL}/csr/38bda804-05d9-4ad0-9ed2-e2152cb05188-1774530696649.jpg`,

  // News Section
  newsGenevaMeeting: `${S3_BASE_URL}/news/7ed874ad-8059-496f-9e2f-edbbf77c57bd-1774530696653.jpg`,
  newsAgriLab: `${S3_BASE_URL}/news/fa791451-7b31-4862-9dc1-ed7d8461ed94-1774530696656.jpg`,
  newsCoffeeHandshake: `${S3_BASE_URL}/news/2cabf4a6-bfef-4cc4-9178-71c0437cb-1774530697714.jpg`,

  // CTA Section
  ctaWheatPattern: `${S3_BASE_URL}/cta/0ad6df9d-6dc1-4aed-9ed2-e2152cb05188-1774530697717.jpg`
};

export default HOMEPAGE_S3_IMAGES;
