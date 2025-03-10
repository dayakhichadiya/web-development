
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">[JustBuy]</span>, your go-to online shopping destination for high-quality products at the best prices. Our goal is to provide a seamless and enjoyable shopping experience, bringing you a wide range of fashion, electronics, home essentials, and more!
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center">
            <span className="text-blue-500 text-lg mr-2">✔</span>
            <span className="text-gray-600">Premium Quality Products</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 text-lg mr-2">✔</span>
            <span className="text-gray-600">Affordable Prices & Exclusive Discounts</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 text-lg mr-2">✔</span>
            <span className="text-gray-600">Fast & Secure Shipping</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 text-lg mr-2">✔</span>
            <span className="text-gray-600">24/7 Customer Support</span>
          </li>
        </ul>

        <p className="text-gray-600 mt-6">
          We believe shopping should be **fun, easy, and affordable**. Join thousands of satisfied customers and explore our collection today. Happy shopping! 🛍️
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
