const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Radiance Med Spa</h3>
          <p className="text-sm">Your trusted partner in aesthetic treatments.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-sm">4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p className="text-sm">(512) 555-0199</p>
          <p className="text-sm">info@radiancemedspa.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;