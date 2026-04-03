import "../style/qrcode.css";
import { QRCodeCanvas } from "qrcode.react";

function Contato() {
const whatsappLink = "https://wa.me/5511914157107?text=Olá%20quero%20mais%20informações";
  return (
    <div className="contato">
      <h1>Fale Comigo</h1>

      <p>Escaneie o QR Code ou clique no botão 👇</p>

      <div className="qr-box">
        <QRCodeCanvas 
          value={whatsappLink}
          size={200}
        />
      </div>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button>Chamar no WhatsApp</button>
      </a>
      <div>
          <p>Ou envie um email para: <a href="mailto:kaikesamtana40@gmail.com">kaikesamtana40@gmail.com</a></p> 
      </div>
    </div>
  );
}

export default Contato;