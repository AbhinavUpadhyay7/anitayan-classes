import { useState } from "react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import { getNoteById } from "../data/notes";

import paymentQR from "../assets/qr/payment-qr.png";


// =====================================================
// UPI ID
// =====================================================

const UPI_ID = "ayushsir@slc";


function NotePayment() {
  const { id } = useParams();

  const navigate = useNavigate();

  const note = getNoteById(id);

  const [paid, setPaid] = useState(false);

  const [copied, setCopied] = useState(false);


  // =====================================================
  // NOTE NOT FOUND
  // =====================================================

  if (!note) {
    return (
      <section className="section">

        <div className="container">

          <div className="empty-state">

            <div
              style={{
                fontSize: "50px",
              }}
            >
              📖
            </div>

            <h2>
              Notes Not Found
            </h2>

            <p>
              यह Notes उपलब्ध नहीं है।
            </p>

            <Link
              to="/notes"
              className="primary-btn"
              style={{
                marginTop: "20px",
              }}
            >
              ← Notes पर जाएँ
            </Link>

          </div>

        </div>

      </section>
    );
  }


  // =====================================================
  // COPY UPI
  // =====================================================

  const handleCopyUPI = async () => {

    try {

      await navigator.clipboard.writeText(
        UPI_ID
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {

      console.error(
        "UPI copy failed:",
        error
      );

    }
  };


  // =====================================================
  // PAYMENT CONFIRMATION
  // =====================================================

  const handlePaymentConfirmation = () => {

    const purchase = {
      noteId: note.id,

      noteTitle: note.title,

      amount: note.price,

      purchasedAt:
        new Date().toISOString(),
    };


    localStorage.setItem(
      `purchase-${note.id}`,
      JSON.stringify(purchase)
    );


    setPaid(true);


    setTimeout(() => {

      navigate(
        `/notes/${note.id}/success`
      );

    }, 500);
  };


  // =====================================================
  // PAGE
  // =====================================================

  return (
    <>

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section className="page-header">

        <div className="container">

          <span className="section-label">
            💳 PAYMENT
          </span>

          <h1>
            Complete Payment
          </h1>

          <p>
            Payment complete करके
            Notes प्राप्त करें।
          </p>

        </div>

      </section>



      {/* =================================================
          PAYMENT SECTION
      ================================================= */}

      <section className="section payment-section">

        <div className="container">

          <div className="payment-layout">


            {/* =================================================
                PAYMENT CARD
            ================================================= */}

            <div className="payment-card">


              {/* HEADER */}

              <div className="payment-card-header">

                <div>

                  <span className="section-label">
                    SCAN & PAY
                  </span>

                  <h2>
                    Payment करें
                  </h2>

                </div>


                <div className="payment-amount">
                  ₹{note.price}
                </div>

              </div>



              {/* =================================================
                  QR CODE
              ================================================= */}

              <div className="payment-qr-wrapper">

                <img
                  src={paymentQR}
                  alt="UPI Payment QR Code"
                  className="payment-qr"
                />

              </div>


              {/* QR TEXT */}

              <p className="qr-instruction">

                📱 किसी भी UPI App से QR Code Scan करें

              </p>



              {/* =================================================
                  UPI ID - CENTERED
              ================================================= */}

              <div className="upi-box">


                {/* UPI LABEL */}

                <div className="upi-label">

                  <span className="upi-icon">
                    ₹
                  </span>

                  <span>
                    UPI ID
                  </span>

                </div>



                {/* UPI ID */}

                <div className="upi-id-center">

                  <strong>
                    {UPI_ID}
                  </strong>

                </div>



                {/* COPY BUTTON */}

                <button
                  type="button"
                  className="copy-upi-btn"
                  onClick={handleCopyUPI}
                >

                  {copied
                    ? "✓ Copied"
                    : "Copy"}

                </button>



                {/* DESCRIPTION */}

                <p className="upi-description">

                  इसी UPI ID पर payment करें।

                </p>


              </div>



              {/* =================================================
                  PAYMENT STEPS
              ================================================= */}

              <div className="payment-steps">


                <div>

                  <span>
                    1
                  </span>

                  <p>
                    QR Code scan करें
                  </p>

                </div>


                <div>

                  <span>
                    2
                  </span>

                  <p>
                    ₹{note.price} payment करें
                  </p>

                </div>


                <div>

                  <span>
                    3
                  </span>

                  <p>
                    नीचे confirmation दें
                  </p>

                </div>


              </div>



              {/* =================================================
                  CONFIRM PAYMENT
              ================================================= */}

              <button
                className="confirm-payment-btn"
                onClick={
                  handlePaymentConfirmation
                }
                disabled={paid}
              >

                {paid
                  ? "Processing..."
                  : "✓ I Have Paid"}

              </button>



              {/* WARNING */}

              <p className="payment-warning">

                ⚠️ यह अभी frontend demo
                payment flow है। Payment
                verification manually होगी।

              </p>


            </div>



            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <aside className="order-summary">

              <span className="section-label">
                ORDER SUMMARY
              </span>


              <h2>
                Your Notes
              </h2>



              {/* PRODUCT */}

              <div className="order-product">

                <div className="order-product-icon">
                  {note.icon}
                </div>


                <div>

                  <h3>
                    {note.shortTitle}
                  </h3>

                  <p>
                    {note.exam}
                  </p>

                </div>

              </div>



              {/* ORIGINAL PRICE */}

              <div className="summary-line">

                <span>
                  Original Price
                </span>

                <del>
                  ₹{note.originalPrice}
                </del>

              </div>



              {/* DISCOUNT */}

              <div className="summary-line">

                <span>
                  Discount
                </span>

                <strong className="discount-text">

                  - ₹
                  {note.originalPrice -
                    note.price}

                </strong>

              </div>



              {/* PAGES */}

              <div className="summary-line muted">

                <span>
                  Pages
                </span>

                <span>
                  {note.pages}+
                </span>

              </div>



              {/* FORMAT */}

              <div className="summary-line muted">

                <span>
                  Format
                </span>

                <span>
                  {note.format}
                </span>

              </div>



              {/* TOTAL */}

              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{note.price}
                </strong>

              </div>



              {/* BACK */}

              <Link
                to={`/notes/${note.id}`}
                className="back-to-notes"
              >
                ← Back to Details
              </Link>


            </aside>


          </div>

        </div>

      </section>

    </>
  );
}


export default NotePayment;