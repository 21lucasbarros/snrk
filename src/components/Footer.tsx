export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                Sobre nós
              </h3>
              <ul className="mt-4 space-y-4">
                {["Nossa História", "Blog", "Trabalhe Conosco"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                Ajuda
              </h3>
              <ul className="mt-4 space-y-4">
                {["Atendimento", "Devolução", "FAQ", "Guia de Tamanhos"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-base text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                Pagamento
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  "Cartão de Crédito",
                  "Boleto",
                  "Pix",
                  "Políticas de Pagamento",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-4">
                {["Email", "WhatsApp", "Instagram", "Facebook"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 mt-8 text-center">
            <p className="text-base text-gray-500">
              &copy; 2025 Sneaker Shop. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
