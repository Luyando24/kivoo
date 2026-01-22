export function Footer() {
  return (
    <footer className="bg-accent-gray py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-black tracking-widest italic mb-4">KIVOO</h3>
          <p className="text-text-gray max-w-sm">
            Bringing affordable luxury and durability to homes in Lusaka, Zambia. 
            Modern design meets everyday utility.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-text-gray text-sm">
            <li>Kitchenware</li>
            <li>Home Appliances</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-text-gray text-sm">
            <li>Lusaka, Zambia</li>
            <li>+260 123 456 789</li>
            <li>support@kivoo.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-sm text-text-gray flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} KIVOO. All rights reserved.</p>
        <p>
          Designed in Zambia by{" "}
          <a 
            href="https://spaceminds.agency/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black font-medium hover:underline"
          >
            Spaceminds
          </a>
        </p>
      </div>
    </footer>
  );
}
