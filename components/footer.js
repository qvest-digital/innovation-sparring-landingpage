const footerNavigation = {
  main: [
    { name: 'Impressum', href: 'https://www.tarent.de/impressum' },
    { name: 'Datenschutz', href: 'https://www.tarent.de/datenschutz' },
  ],
};

export default function Footer() {
  return (
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 Qvest Digital AG. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
