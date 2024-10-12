import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactCard from '@/components/sections/contact_card';
import MapsButton from '@/components/buttons/MapsButton';
import GoogleButton from '@/components/buttons/GoogleButton';
import PhoneButton from '@/components/buttons/PhoneButton';
import WhatsappButton from '@/components/buttons/WAButton';

const Contact = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto bg-background2">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12  bg-background2">
            <p className="mb-5 font-light text-gray-400 sm:text-xl ">
              Informacije
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-200">
              MKAutomobili
            </h2>
          </div>
          <div className="contact_bg w-full">
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 w-full justify-center align-middle items-center max-w-5xl">
              <ContactCard
                icon={
                  <PhoneIphoneIcon
                    sx={{
                      fontSize: 40,
                      padding: 0,
                      paddingBottom: 2,
                      margin: 0,
                    }}
                  />
                }
                title="Kontaktirajte Nas"
                description="Daniel: 099/594-8180"
                description2="Samuel: 091/625-4631"
                additional={<PhoneButton />}
                additional2={<WhatsappButton />}
              />
              {/* <!-- Pricing Card --> */}
              <ContactCard
                icon={
                  <LocationOnIcon
                    sx={{
                      fontSize: 40,
                      padding: 0,
                      paddingBottom: 2,
                      margin: 0,
                    }}
                  />
                }
                title="Naša Lokacija"
                description="Osijek"
                description2="Industrijska zona (Čepinska)"
                additional={<MapsButton />}
              />
              {/* <!-- Pricing Card --> */}
              <ContactCard
                icon={
                  <AccessTimeIcon
                    sx={{
                      fontSize: 40,
                      padding: 0,
                      paddingBottom: 2,
                      margin: 0,
                    }}
                  />
                }
                title="Radno Vrijeme"
                description="Pon-Pet: 08h - 17h"
                description2="Sub: 08h-14h"
                additional={<GoogleButton />}
              />
            </div>
            {/* <!-- Pricing Card --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
