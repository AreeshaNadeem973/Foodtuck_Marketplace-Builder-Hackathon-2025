// import { createClient } from 'next-sanity'


// export const client = createClient({
//   projectId: "eydnrc4j",
//   dataset: "production",
//   token: "sk4yUz75M6QAbzTpBy8RVCeZyp3CpFCAFb0HNm4sqG7MARnpbo4KsB2Sdbv8IzILum2DTBeYyy2KTIM9KcM41QD5HClaKTezYS3y3nuKh9EaYQmoZSGKmLwug8hO9CMIFCkQoMX04dCyxVjcDPOqu6iTiatyDS2q1xIQMnfr9mbjvObMR91g",
//   useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
//   apiVersion: "2023-01-27",
// });





import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: "2023-01-27",
});








