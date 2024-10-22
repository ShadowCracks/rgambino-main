import React from 'react';
import PackageSection from './PackageSection';
import AddonSection from './AddonSection';
import Layout from '../About/Layout';

const PricingPage: React.FC = () => {
  
  const exteriorPackages = [
    {
      title: 'Standard Package (Est. Time: 1.5 Hrs)',
      features: [
        'Bug & Tar Removal',
        'Foam Bath w/ Scratch-Free Hand Wash',
        'Clean Windows & Mirrors',
        'Hand dry with microfiber towels!',
        'Tire & Rims Deep Cleaned and Detailed',
        'Apply spray sealant (2-month protection)'
      ],
      price: 'Cars: $99, Small SUVs & Trucks: $125, Large SUVs & Trucks: $175'
    },
    {
      title: 'Deluxe Package (Est. Time : 2.5 Hrs)',
      features: [
        'Standard Package',
        'Foam Bath w/ Scratch-Free Hand Wash',
        'Light Vacuum of Interior and Trunk',
        'Rim polishing',
        'Metal/aluminum polishing',
        'Clay Bar Treatment'
      ],
      price: 'Cars: $150, Mid-Size SUVs & Trucks: $250, Full-Size SUVs & Trucks: $300'
    }

  ];

  const interiorPackages = [
    {
      title: 'Standard Package (Est. Time: 2 Hrs)',
      features: [
        'Deep Vacuum of Interior & Trunk',
        'Interior Windows & Mirrors Cleaned',
        'Clean plastic/vinyl surface',
        'Detail Door Jambs',
        'Air Freshener Treatment'
      ],
      price: 'Cars: $99, Mid-Size SUVs & Trucks: $200, Full-Size SUVs & Trucks: $250'
    },
    {
      title: 'Deluxe Package (Est. Time: 2.5 Hrs)',
      features: [
        'Standard Package',
        'Pet Hair and Odor Removal',
        'Clean fabric upholstery (Leather +$50)',
        'Steam clean, disinfect & condition all interior plastics',
        'Metal/aluminum polishing',
        'Clay Bar Treatment',
        'Interior Shampoo, Stain Extraction, & Deep Upholstery Cleaning'
      ],
      price: 'Cars: $225, Mid-Size SUVs & Trucks: $275, Full-Size SUVs & Trucks: $350'
    }
  ];

  const fullDetailingPackages = [
    {
      title: 'Standard Package (Est. Time: 3 Hrs)',
      features: [
        'Exterior Standard Package',
        'Interior Standard Package',
        '3 Month Ceramic Wax!'
      ],
      price: 'Cars: $175, Mid-Size SUVs & Trucks: $250, Full-Size SUVs & Trucks: $350'
    },
    {
      title: 'Galactic Package (Est. Time: 3.5 Hrs)',
      features: [
        'Exterior Deluxe Package',
        'Interior Deluxe Package',
        'Engine Bay Cleaning',
        '6 Month Paint Sealant'
      ],
      price: 'Cars: $275, Mid-Size SUVs & Trucks: $350, Full-Size SUVs & Trucks: $450'
    }
  ];

  const addons = [
    { title: 'Headlight Restoration' },
    { title: 'Engine Bay Cleaning' }
  ];

  return (
    <div className="flex flex-col bg-white">
      <Layout>
      <main>
        <PackageSection title="Exterior Detailing" packages={exteriorPackages} />
        <PackageSection title="Interior Detailing" packages={interiorPackages} />
        <div className="self-center mt-10 text-xl font-medium leading-8 text-center text-black max-md:max-w-full">
          If you leave garbage in your vehicles interior to the extent that it causes a significant delay to the detailing job,
          <br /> then you may be subject to a $75 Clean Out Fee.
        </div>
        <PackageSection title="Full Detailing" packages={fullDetailingPackages} />
        <AddonSection addons={addons} />
      </main>
      </Layout>
    </div>
  );
};

export default PricingPage;