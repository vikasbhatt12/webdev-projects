const Footer = () => {
  return (
    <footer className="bg-secondary text-highlight mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>© {new Date().getFullYear()} ShopZen. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">A Modern E-commerce Experience by You</p>
      </div>
    </footer>
  );
};

export default Footer;