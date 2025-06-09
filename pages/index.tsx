import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const metaTitle = "Ekart Logistics";
const metaDescription =
  "Ekart Logistics is a leading logistics company providing efficient and reliable delivery services across India. We specialize in e-commerce logistics, ensuring timely and secure delivery of packages to customers nationwide.";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content=" logistics, delivery, e-commerce, shipping, India, Ekart Logistics"
        />
        <meta property="og:title" content={metaTitle} />

        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <div className=" flex h-svh  ">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Ekart Logistics
            </h1>
            <p className="text-lg text-gray-700">
              Your trusted partner in logistics and delivery services.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="https://www.ekartlogistics.in/wp-content/uploads/2025/03/615-2023_05_15-favicon-1.webp"
              alt="Ekart Logistics Logo"
            />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-lg text-gray-700 mt-4">
              We are committed to providing efficient and reliable logistics
              solutions across India.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
