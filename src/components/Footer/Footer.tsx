import downloadApp from "../../assets/home/app.png";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-[#222831] dark:border-t justify-center place-items-start lg:place-items-start text-white py-20 lg:px-24 px-12 grid grid-cols-2 lg:grid-cols-5 gap-x-8">
      {/* Exclusive Section */}
      <div className="space-y-2 lg:space-y-4 pb-6">
        <h5 className="font-bold text-2xl">Exclusive</h5>
        <p className="font-light">Subscribe</p>
        <p className="font-light">Get 10% off your first order</p>
      </div>

      {/* Support Section */}
      <div className="space-y-2 lg:space-y-4 pb-6">
        <h5 className="font-medium text-xl">Support</h5>
        <p className="font-light">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="font-light">exclusive@gmail.com</p>
        <p className="font-light">+88015-88888-9999</p>
      </div>

      {/* Account Section */}
      <div className="space-y-2 lg:space-y-4 pb-6">
        <h5 className="font-medium text-xl">Account</h5>
        <p className="font-light">My Account</p>
        <p className="font-light">Login / Register</p>
        <p className="font-light">Cart</p>
        <p className="font-light">Shop</p>
      </div>

      {/* Quick Links Section */}
      <div className="space-y-2 lg:space-y-4 pb-6">
        <h5 className="font-medium text-xl">Quick Links</h5>
        <p className="font-light">Privacy Policy</p>
        <p className="font-light">Terms Of Use</p>
        <p className="font-light">FAQ</p>
        <p className="font-light">Contact</p>
      </div>

      {/* Download App Section */}
      <div className="space-y-2 lg:space-y-4 pb-6 lg:text-center">
        <h5 className="font-medium text-xl">Download App</h5>
        <p className="font-semibold text-sm text-gray-500">
          Save $3 with App New User Only
        </p>
        <img className="mx-auto" src={downloadApp} alt="Download App" />
      </div>
    </footer>
  );
};

export default Footer;
