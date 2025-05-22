import { Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="../img/logo.png"
                alt="Logo SNRK Sneaker Shop"
                className="w-auto h-16"
                draggable="false"
                loading="lazy"
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Início", "Masculino", "Feminino", "Infantil", "Ofertas"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-blue-600">
                <User className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-blue-600 relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
