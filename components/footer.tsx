export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="dot-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              LANDING<span className="text-accent">.</span>Studio
            </h3>
            <p className="text-muted-foreground">
              Templates profissionais de landing pages para impulsionar seu negócio online.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Templates</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Negócios
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Saúde
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Gastronomia
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">contato@landingstudio.com</li>
              <li className="text-muted-foreground">(00) 0000-0000</li>
              <li className="text-muted-foreground">São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LANDING.Studio. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
