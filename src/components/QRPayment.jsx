function QRPayment({
  amount = 199,
  upiId = "anitayanclasses@upi",
}) {
  return (
    <div className="qr-payment-component">

      <div className="component-qr">
        <div className="qr-corner top-left" />
        <div className="qr-corner top-right" />
        <div className="qr-corner bottom-left" />

        <div className="qr-random-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <strong>
          QR
        </strong>
      </div>

      <h3>
        Scan & Pay
      </h3>

      <p>
        किसी भी UPI App से
        QR Scan करें
      </p>

      <div className="component-amount">
        ₹{amount}
      </div>

      <div className="component-upi">
        {upiId}
      </div>

      <small className="component-demo-note">
        Demo payment details
      </small>
    </div>
  );
}

export default QRPayment;