var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody, h1,h2,h3,h4,h5,h6 {font-family: \"Montserrat\", sans-serif}\n.w3-row-padding img {margin-bottom: 12px}\n/* Set the width of the sidebar to 120px */\n.w3-sidebar {width: 120px;background: #222;}\n/* Add a left margin to the \"page content\" that matches the width of the sidebar (120px) */\n#main {margin-left: 120px}\n/* Remove margins from \"page content\" on small screens */\n@media only screen and (max-width: 600px) {#main {margin-left: 0}}\n" }} />
        {/* Icon Bar (Sidebar - hidden on small screens) */}
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
          {/* Avatar image in top left corner */}
          <img src="/w3images/avatar_smoke.jpg" style={{width: '100%'}} />
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-home w3-xxlarge" />
            <p>HOME</p>
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge" />
            <p>ABOUT</p>
          </a>
          <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-eye w3-xxlarge" />
            <p>PHOTOS</p>
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-envelope w3-xxlarge" />
            <p>CONTACT</p>
          </a>
        </nav>
        {/* Navbar on small screens (Hidden on medium and large screens) */}
        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#" className="w3-bar-item w3-button" style={{width: '25% !important'}}>INÍCIO</a>
            <a href="#about" className="w3-bar-item w3-button" style={{width: '25% !important'}}>ABOUT</a>
            <a href="#photos" className="w3-bar-item w3-button" style={{width: '25% !important'}}>FOTOS</a>
            <a href="#contact" className="w3-bar-item w3-button" style={{width: '25% !important'}}>CONTATO</a>
          </div>
        </div>
        {/* Page Content */}
        <div className="w3-padding-large" id="main">
          {/* Header/Home */}
          <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
            <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Hiago Martins.</h1>
            <p>Fotógrafo e Web Designer.</p>
            <img src="images (1).jpeg" alt="boy" className="w3-image" width={992} height={1108} />
          </header>
          {/* About Section */}
          <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
            <h2 className="w3-text-light-grey">Um pouco sobre mim</h2>
            <hr style={{width: '200px'}} className="w3-opacity" />
            <p>Uma pessoa misteriosa e bem tranquila, gosto de fotografar a vida, natureza e as demais coisas relacionadas, gosto de coisas que me trazem uma boa energia, aprendendo muito com a vida e com meus erros. Trabalho com Fotografia desde meus 15 anos, profissional a 8 anos, trabalhando com os todos os módelos de fotografia. Sonho em viajar o mundo todo e fotografar cada continente e suas mais belas paisagens e culturas. Uma pessoa mente a berta e de bem com a vida. GOOD VIBES FOR YOU.
            </p>
            <h3 className="w3-padding-16 w3-text-light-grey">Habilidades</h3>
            <p className="w3-wide">Fotografia</p>
            <div className="w3-white">
              <div className="w3-dark-grey" style={{height: '28px', width: '95%'}} />
            </div>
            <p className="w3-wide">Web Design</p>
            <div className="w3-white">
              <div className="w3-dark-grey" style={{height: '28px', width: '85%'}} />
            </div>
            <p className="w3-wide">Photoshop</p>
            <div className="w3-white">
              <div className="w3-dark-grey" style={{height: '28px', width: '80%'}} />
            </div><br />
            <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">20+</span><br />
                Parceiros
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">90+</span><br />
                Projetos concluídos
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">140+</span><br />
                Clientes Satisfeitos 
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">180+</span><br />
                Meetings
              </div>
            </div>
            <button className="w3-button w3-light-grey w3-padding-large w3-section">
              <i className="fa fa-download" /> Baixar resumo 
            </button>
            {/* Grid for pricing tables */}
            <h3 className="w3-padding-16 w3-text-light-grey">Meu preço</h3>
            <div className="w3-row-padding" style={{margin: '0 -16px'}}>
              <div className="w3-half w3-margin-bottom">
                <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-dark-grey w3-xlarge w3-padding-32">Básico</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Fotografia</li>
                  <li className="w3-padding-16">Armazenamento de 10GB</li>
                  <li className="w3-padding-16">E-mail para suporte</li>
                  <li className="w3-padding-16">
                    <h2>$ 10</h2>
                    <span className="w3-opacity">pôr mês</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button className="w3-button w3-white w3-padding-large w3-hover-black">inscreva-se</button>
                  </li>
                </ul>
              </div>
              <div className="w3-half">
                <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-dark-grey w3-xlarge w3-padding-32">Avançado</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Fotografia</li>
                  <li className="w3-padding-16">Armazenamento de 50GB</li>
                  <li className="w3-padding-16">E-mail para suporte</li>
                  <li className="w3-padding-16">
                    <h2>$ 25</h2>
                    <span className="w3-opacity">por mês</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-white w3-padding-large w3-hover-black">Inscreva-se</button>
                  </li>
                </ul>
              </div>
              {/* End Grid/Pricing tables */}
            </div>
            {/* Testimonials */}
            <h3 className="w3-padding-24 w3-text-light-grey">Minha reputação</h3>  
            <img src="ret-vf.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '80px'}} />
            <p><span className="w3-large w3-margin-right">Felipe Ret.</span> CEO da Mighty Schools.</p>
            <p>Hiago nos salvou de um desastre na web.</p><br />
            <img src="lisa.jpeg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '80px'}} />
            <p><span className="w3-large w3-margin-right">Ana Sarah.</span> CEO na empresa.</p>
            <p>Ninguém é melhor do que Hiago Martins.</p>
            {/* End About Section */}
          </div>
          {/* Portfolio Section */}
          <div className="w3-padding-64 w3-content" id="photos">
            <h2 className="w3-text-light-grey">Minhas fotos</h2>
            <hr style={{width: '200px'}} className="w3-opacity" />
            {/* Grid for photos */}
            <div className="w3-row-padding" style={{margin: '0 -16px'}}>
              <div className="w3-half">
                <img src="wedding.jpg" style={{width: '100%'}} />
                <img src="rocks.jpg" style={{width: '100%'}} />
              </div>
              {/* End photo grid */}
            </div>
            {/* End Portfolio Section */}
          </div>
          {/* Contact Section */}
          <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
            <h2 className="w3-text-light-grey">Contact Me</h2>
            <hr style={{width: '200px'}} className="w3-opacity" />
            <div className="w3-section">
              <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" /> SP</p>
              <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Phone: +55 11 96851-8116</p>
              <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: hiagomartinsitu@gmail.com</p>
            </div><br />
            <p>Vamos entrar em contato. Me mande uma mensagem:</p>
            <form action="/action_page.php" target="_blank">
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
              <p>
                <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i className="fa fa-paper-plane" /> SEND MESSAGE
                </button>
              </p>
            </form>
            {/* End Contact Section */}
          </div>
          {/* Footer */}
          <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
            <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a></p>
            {/* End footer */}
          </footer>
          {/* END PAGE CONTENT */}
        </div>
      </div>
    );
  }
});
