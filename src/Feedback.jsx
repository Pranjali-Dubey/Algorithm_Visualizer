// import React, { useState } from 'react';
// import './Feedback.css';

// const FeedbackPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         rating: '',
//         comments: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Feedback submitted:', formData);
//         // Clear form fields after submission
//         setFormData({
//             name: '',
//             email: '',
//             rating: '',
//             comments: ''
//         });
//         alert('Thank you for your feedback!');
//     };

//     return (
//         <div className="feedback-page">
//             <h1 className="feedback-title">Feedback</h1>
//             <p className="feedback-subtitle">We value your feedback to improve our algorithm visualizer!</p>
//             <form className="feedback-form" onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </label>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </label>
//                 <label>
//                     Rating:
//                     <select
//                         name="rating"
//                         value={formData.rating}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select rating</option>
//                         <option value="5">Excellent</option>
//                         <option value="4">Very Good</option>
//                         <option value="3">Good</option>
//                         <option value="2">Fair</option>
//                         <option value="1">Poor</option>
//                     </select>
//                 </label>
//                 <label>
//                     Comments:
//                     <textarea
//                         name="comments"
//                         value={formData.comments}
//                         onChange={handleChange}
//                         placeholder="Share your experience with us..."
//                         required
//                     />
//                 </label>
//                 <button type="submit" className="submit-button">Submit Feedback</button>
//             </form>
//         </div>
//     );
// };

// export default FeedbackPage;




// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Feedback.css';

// const FeedbackPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         rating: '',
//         comments: ''
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
    
//         const emailParams = {
//             to_name: 'Admin',
//             name: formData.name,
//             email: formData.email,
//             ratings: formData.rating,
//             comments: formData.comments
//         };
    
//         try {
//             const response = await emailjs.send(
//                 'service_hbinlvy', // Replace with your EmailJS service ID
//                 'template_nponq0s', // Replace with your EmailJS template ID
//                 emailParams,
//                 'ZQXJc_Xfy6SKANuSF' // Replace with your EmailJS public key
//             );
//             console.log('Feedback submitted successfully:', response.text);
//             alert('Thank you for your feedback!');
    
//             // Reset form fields
//             setFormData({
//                 name: '',
//                 email: '',
//                 rating: '',
//                 comments: ''
//             });
//         } catch (error) {
//             console.error('Error submitting feedback:', error);
//             alert('An error occurred while sending your feedback. Please try again later.');
            
//             // Log more detailed error
//             if (error.response) {
//                 console.error('Error response:', error.response);
//             }
//             if (error.request) {
//                 console.error('Error request:', error.request);
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
    

//     return (
//         <div className="feedback-page">
//             <h1 className="feedback-title">Feedback</h1>
//             <p className="feedback-subtitle">We value your feedback to improve our algorithm visualizer!</p>
//             <form className="feedback-form" onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </label>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </label>
//                 <label>
//                     Rating:
//                     <select
//                         name="rating"
//                         value={formData.rating}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select rating</option>
//                         <option value="5">Excellent</option>
//                         <option value="4">Very Good</option>
//                         <option value="3">Good</option>
//                         <option value="2">Fair</option>
//                         <option value="1">Poor</option>
//                     </select>
//                 </label>
//                 <label>
//                     Comments:
//                     <textarea
//                         name="comments"
//                         value={formData.comments}
//                         onChange={handleChange}
//                         placeholder="Share your experience with us..."
//                         required
//                     />
//                 </label>
//                 <button
//                     type="submit"
//                     className="submit-button"
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default FeedbackPage;










// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_hbinlvy', 'template_7y0mqvj', form.current, {
//         publicKey: 'ZQXJc_Xfy6SKANuSF',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   const formStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     maxWidth: '400px',
//     margin: 'auto',
//     padding: '20px',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   };

//   const labelStyles = {
//     marginBottom: '8px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const inputStyles = {
//     padding: '10px',
//     marginBottom: '12px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   };

//   const textareaStyles = {
//     padding: '10px',
//     marginBottom: '12px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     minHeight: '120px',
//   };

//   const buttonStyles = {
//     padding: '12px 20px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const buttonHoverStyles = {
//     backgroundColor: '#45a049',
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} style={formStyles}>
//       <label style={labelStyles}>Name</label>
//       <input type="text" name="name" style={inputStyles} required />
      
//       <label style={labelStyles}>Email</label>
//       <input type="email" name="uemail" style={inputStyles} required />
      
//       <label style={labelStyles}>Message</label>
//       <textarea name="message" style={textareaStyles} required />
      
//       <button
//                     type="submit"
//                     className="submit-button"
                    
//                 >
                    
//                 </button>
//     </form>
//   );
// };
// export default ContactUs



import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Feedback.css';

const FeedbackPage = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ratings: '', // Updated to match the EmailJS template
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send feedback via EmailJS
        emailjs
            .sendForm('service_hbinlvy', 'template_7y0mqvj', form.current, 'ZQXJc_Xfy6SKANuSF')
            .then(
                () => {
                    console.log('Feedback sent successfully!');
                    alert('Thank you for your feedback!');
                },
                (error) => {
                    console.log('Failed to send feedback:', error.text);
                    alert('Failed to send feedback. Please try again later.');
                }
            );

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            ratings: '',
            comments: '',
        });
    };

    return (
        <div className="feedback-page">
            <h1 className="feedback-title">Feedback</h1>
            <p className="feedback-subtitle">We value your feedback to improve our algorithm visualizer!</p>
            <form
                className="feedback-form"
                ref={form}
                onSubmit={handleSubmit}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label>
                    Rating:
                    <select
                        name="ratings" // Matches the EmailJS template placeholder
                        value={formData.ratings}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select rating</option>
                        <option value="5">5:Excellent</option>
                        <option value="4">4:Very Good</option>
                        <option value="3">3:Good</option>
                        <option value="2">2:Fair</option>
                        <option value="1">1:Poor</option>
                    </select>
                </label>
                <label>
                    Comments:
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Share your experience with us..."
                        required
                    />
                </label>
                <button type="submit" className="submit-button">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackPage;
