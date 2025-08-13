import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

type Merchant = {
  name: string;
  logo: string;
  // Add other properties if needed
};

const merchantData: Merchant[] = [
  {
    name: "Manado Siar",
    logo: "/manadosiar.png",
  },
  {
    name: "Wealthy People Indonesia",
    logo: "/wealthypeople.png",
  },
  {
    name: "Harvest Agro Nusantara",
    logo: "/orispices.png",
  },
  {
    name: "Utuxia Photo",
    logo: "/utuxia.png",
  },
  {
    name: "Blessing Vanilla Indonesia",
    logo: "/blessing.png",
  },
  {
    name: "Mayesa Cocopro Indonesia",
    logo: "/mayesa.png",
  },
];

export default function LogoCloud() {
  return (
    <section id="clients" className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering the best clients</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {merchantData.map((data, index) => (
                <div key={index} className="flex items-center">
                  <div className="relative h-12 w-12 mr-4">
                    <Image
                      src={data.logo}
                      alt="UTUXIA"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{data.name}</h4>
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
