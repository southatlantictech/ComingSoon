import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="South Atlantic Technology Partners LLC">
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Coming soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">Let's Go Further Together.</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          Our website is under construction. Check back for an update soon.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
