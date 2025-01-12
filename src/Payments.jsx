// import React, { useState } from 'react';
// import './Payments.css';

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//     cardHolderName: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [isProcessing, setIsProcessing] = useState(false); // State to show processing status
//   const [message, setMessage] = useState(''); // State to store success or failure message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!/^\d{16}$/.test(formData.cardNumber)) {
//       newErrors.cardNumber = 'Card number must be 16 digits.';
//     }
//     if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
//       newErrors.expirationDate = 'Expiration date must be in MM/YY format.';
//     }
//     if (!/^\d{3}$/.test(formData.cvv)) {
//       newErrors.cvv = 'CVV must be 3 digits.';
//     }
//     if (!formData.cardHolderName.trim()) {
//       newErrors.cardHolderName = 'Cardholder name is required.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsProcessing(true);
//       setMessage('Processing...'); // Show processing message
//       // Simulate a delay for successful payment
//     } 
      
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Details</h2>
//       <form onSubmit={handleSubmit} className="payment-form">
//         <div className="form-group">
//           <label>Card Number</label>
//           <input
//             type="text"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             placeholder="1234 5678 9012 3456"
//           />
//           {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
//         </div>
//         <div className="form-group">
//           <label>Expiration Date</label>
//           <input
//             type="text"
//             name="expirationDate"
//             value={formData.expirationDate}
//             onChange={handleChange}
//             placeholder="MM/YY"
//           />
//           {errors.expirationDate && <p className="error-text">{errors.expirationDate}</p>}
//         </div>
//         <div className="form-group">
//           <label>CVV</label>
//           <input
//             type="text"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleChange}
//             placeholder="123"
//           />
//           {errors.cvv && <p className="error-text">{errors.cvv}</p>}
//         </div>
//         <div className="form-group">
//           <label>Cardholder Name</label>
//           <input
//             type="text"
//             name="cardHolderName"
//             value={formData.cardHolderName}
//             onChange={handleChange}
//             placeholder="John Doe"
//           />
//           {errors.cardHolderName && <p className="error-text">{errors.cardHolderName}</p>}
//         </div>
//         <button type="submit" className="submit-button" disabled={isProcessing}>
//           {isProcessing ? 'Processing...' : 'Pay Now' }
//         </button>
//       </form>
//       {message && <p className="message-text">{message}</p>}
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payments.css';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = 'Expiration date must be in MM/YY format.';
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    if (!formData.cardHolderName.trim()) {
      newErrors.cardHolderName = 'Cardholder name is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsProcessing(true);

      // Simulate payment processing delay
      setTimeout(() => {
        setIsProcessing(false);
        alert('Payment processing!');
        navigate('/Notes_Problems'); // Redirect to NotesPage after payment
      }, 2000); // 2-second delay to simulate payment processing
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
        </div>
        <div className="form-group">
          <label>Expiration Date</label>
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            placeholder="MM/YY"
          />
          {errors.expirationDate && <p className="error-text">{errors.expirationDate}</p>}
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
          />
          {errors.cvv && <p className="error-text">{errors.cvv}</p>}
        </div>
        <div className="form-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.cardHolderName && <p className="error-text">{errors.cardHolderName}</p>}
        </div>
        <button type="submit" className="submit-button" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;

