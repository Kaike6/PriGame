import "../style/qrcode.css";
import { QRCodeCanvas } from "qrcode.react";

function Contato() {
  return (
    <div className="qr">
      <h1>Meu QR Code</h1>
      <QRCodeCanvas value="https://seusite.com" />
    </div>
  );
}

export default Contato;