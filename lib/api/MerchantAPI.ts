// export interface Merchant {
//   id: number;
//   name: string;
//   logoUrl: string;
// }

// const dummyJson: Merchant[] = [
//   {
//     id: 1,
//     name: "McDonald's",
//     logoUrl: '../../public/logoMerchant1.png',
//   },
//   {
//     id: 2,
//     name: 'KFC',
//     logoUrl: '../../public/logoMerchant2.png',
//   },
//   {
//     id: 3,
//     name: 'Burger King',
//     logoUrl: '../../public/logoMerchant3.png',
//   },
// ];

const MERCHANT_API_URL = process.env.NEXT_PUBLIC_MERCHANT_API_URL;
console.log('Using Merchant API URL:', MERCHANT_API_URL);
// export const getMerchantData = async () => {
//   try {
//     const response = await getMerchantApi();
//     // const data = await response.json();
//     return response;
//   } catch (error) {
//     console.warn('Falling back to dummy merchant data due to error:', error);
//     return dummyJson;
//   }
// };

// export const getMerchantDataJson = (): Merchant[] => {
//   return dummyJson;
// };

export const getMerchantApi = async () => {
  if (!MERCHANT_API_URL) {
    throw new Error('MERCHANT_API_URL is not defined');
  }
  return await fetch(MERCHANT_API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
};
