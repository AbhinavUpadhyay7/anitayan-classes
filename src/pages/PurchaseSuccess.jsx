import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PurchaseSuccess() {
  const { id } = useParams();

  const [purchase, setPurchase] = useState(null);

  // =====================================================
  // WHATSAPP NUMBER
  // =====================================================
  // YAHAN APNA WHATSAPP NUMBER DALO
  // Example:
  // 919876543210
  //
  // +, spaces, brackets mat lagana.
  // =====================================================

  const WHATSAPP_NUMBER = "9454064340";


  // =====================================================
  // GET PURCHASE DATA
  // =====================================================

  useEffect(() => {

    const savedPurchase =
      localStorage.getItem(
        `purchase-${id}`
      );

    if (savedPurchase) {

      try {

        setPurchase(
          JSON.parse(savedPurchase)
        );

      } catch (error) {

        console.error(
          "Purchase data error:",
          error
        );

      }

    }

  }, [id]);


  // =====================================================
  // GENERATE ORDER ID
  // =====================================================

  const generateOrderId = () => {

    const savedOrderId =
      localStorage.getItem(
        `order-id-${id}`
      );

    if (savedOrderId) {
      return savedOrderId;
    }


    const orderId =
      "AC" +
      Date.now()
        .toString()
        .slice(-8);


    localStorage.setItem(
      `order-id-${id}`,
      orderId
    );


    return orderId;
  };


  const orderId =
    generateOrderId();


  // =====================================================
  // WHATSAPP MESSAGE
  // =====================================================

  const whatsappMessage = purchase
    ? `Hello Ayush Sir,

I have completed the payment for my Notes.

📚 Notes: ${purchase.noteTitle}
💰 Amount Paid: ₹${purchase.amount}
🧾 Order ID: ${orderId}

I am sending my payment screenshot for verification.

Please verify my payment and provide the Notes.

Thank you.
Anitayan Classes`
    : `Hello Ayush Sir,

I have completed my payment for Anitayan Classes Notes.

Please verify my payment.

Thank you.`;



  // =====================================================
  // OPEN WHATSAPP
  // =====================================================

  const handleWhatsApp = () => {

    const encodedMessage =
      encodeURIComponent(
        whatsappMessage
      );


    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
      whatsappUrl,
      "_blank"
    );

  };


  // =====================================================
  // PAYMENT DATA NOT FOUND
  // =====================================================

  if (!purchase) {

    return (
      <section className="purchase-success-page">

        <div className="container">

          <div className="success-card">

            <div className="success-icon error-icon">
              !
            </div>

            <h1>
              Payment Details Not Found
            </h1>

            <p>
              Purchase details नहीं मिल सके।
              कृपया Notes section से दोबारा try करें।
            </p>

            <Link
              to="/notes"
              className="success-primary-btn"
            >
              ← Notes पर जाएँ
            </Link>

          </div>

        </div>

      </section>
    );

  }



  // =====================================================
  // SUCCESS PAGE
  // =====================================================

  return (
    <section className="purchase-success-page">

      <div className="container">

        <div className="success-wrapper">


          {/* =================================================
              SUCCESS CARD
          ================================================= */}

          <div className="success-card">


            {/* SUCCESS ICON */}

            <div className="success-icon">
              ✓
            </div>


            {/* TITLE */}

            <span className="success-label">
              PAYMENT SUBMITTED
            </span>


            <h1>
              Payment Successfully Submitted!
            </h1>


            <p className="success-main-text">

              आपका payment details submit हो गया है।
              अब payment verification के लिए
              screenshot WhatsApp पर भेजें।

            </p>



            {/* =================================================
                AMOUNT
            ================================================= */}

            <div className="success-amount-box">

              <span>
                Amount Paid
              </span>

              <strong>
                ₹{purchase.amount}
              </strong>

            </div>



            {/* =================================================
                ORDER DETAILS
            ================================================= */}

            <div className="success-details">


              <div className="success-detail-row">

                <span>
                  Notes
                </span>

                <strong>
                  {purchase.noteTitle}
                </strong>

              </div>



              <div className="success-detail-row">

                <span>
                  Order ID
                </span>

                <strong>
                  {orderId}
                </strong>

              </div>



              <div className="success-detail-row">

                <span>
                  Payment Time
                </span>

                <strong>

                  {new Date(
                    purchase.purchasedAt
                  ).toLocaleString(
                    "en-IN"
                  )}

                </strong>

              </div>


            </div>



            {/* =================================================
                WHATSAPP BOX
            ================================================= */}

            <div className="whatsapp-payment-box">

              <div className="whatsapp-icon">
                <span>WA</span>
              </div>


              <div className="whatsapp-content">

                <h3>
                  Payment Screenshot भेजें
                </h3>

                <p>
                  अपने payment का screenshot
                  WhatsApp पर भेजकर verification
                  करवाएँ।
                </p>

              </div>

            </div>



            {/* =================================================
                WHATSAPP BUTTON
            ================================================= */}

            <button
              type="button"
              className="whatsapp-success-btn"
              onClick={handleWhatsApp}
            >

              <span className="whatsapp-btn-icon">
                WhatsApp
              </span>

              Payment Screenshot WhatsApp पर भेजें

            </button>



            {/* =================================================
                INSTRUCTIONS
            ================================================= */}

            <div className="screenshot-instruction">

              <div className="instruction-number">
                1
              </div>

              <p>
                ऊपर दिए WhatsApp button पर click करें
              </p>


              <div className="instruction-number">
                2
              </div>

              <p>
                WhatsApp में अपना payment screenshot attach करें
              </p>


              <div className="instruction-number">
                3
              </div>

              <p>
                Screenshot भेजने के बाद verification का इंतजार करें
              </p>

            </div>



            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="success-actions">

              <Link
                to="/notes"
                className="success-secondary-btn"
              >
                📚 More Notes
              </Link>


              <Link
                to="/"
                className="success-secondary-btn"
              >
                🏠 Home
              </Link>

            </div>



            {/* =================================================
                NOTE
            ================================================= */}

            <div className="success-note">

              <strong>
                ℹ️ Important
              </strong>

              <p>
                Notes access payment verification
                के बाद provide किया जाएगा।
              </p>

            </div>


          </div>


          {/* =================================================
              SIDE INFO
          ================================================= */}

          <div className="success-side-card">

            <div className="side-check">
              ✓
            </div>

            <h3>
              Payment Verification
            </h3>

            <p>
              आपका payment screenshot मिलने के
              बाद payment verify किया जाएगा।
            </p>


            <div className="side-step">

              <span>
                1
              </span>

              <div>
                <strong>
                  Payment करें
                </strong>

                <small>
                  UPI QR से
                </small>
              </div>

            </div>


            <div className="side-step">

              <span>
                2
              </span>

              <div>
                <strong>
                  Screenshot भेजें
                </strong>

                <small>
                  WhatsApp पर
                </small>
              </div>

            </div>


            <div className="side-step">

              <span>
                3
              </span>

              <div>
                <strong>
                  Verification
                </strong>

                <small>
                  Payment check होगा
                </small>
              </div>

            </div>


            <div className="side-step">

              <span>
                4
              </span>

              <div>
                <strong>
                  Notes प्राप्त करें
                </strong>

                <small>
                  Verification के बाद
                </small>
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default PurchaseSuccess;