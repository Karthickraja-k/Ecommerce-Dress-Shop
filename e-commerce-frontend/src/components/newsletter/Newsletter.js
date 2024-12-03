// import React, { useState } from 'react';
// import axios from 'axios';

// const NewsletterSender = () => {
//   const [subject, setSubject] = useState('');
//   const [content, setContent] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSendNewsletter = async () => {
//     try {
//       // Validate form fields
//       const getToken =  localStorage.getItem('token');
//       if (!subject || !content) {
//         setError('Subject and content are required');
//         return;
//       }

//       // Make a POST request to your backend to send the newsletter
//       await axios.post('/api/v1/admin/send-newsletter', { subject, content },
//       {
//         headers: {
//             Authorization: `Bearer ${getToken}`,
//           },
//     });

//       // Update state to indicate successful sending
//       setSuccess(true);
//       setError('');
//     } catch (err) {
//       // Handle errors, e.g., if the subject or content is missing
//       setError('Failed to send newsletter. Please try again.');
//     }
//   };  


//   return(
//     <div className="newsletter-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//   <h2>Send Newsletter to Users</h2>
//   {success ? (
//     <h4>Newsletter sent successfully!</h4>
//   ) : (
//     <div className='border ronded shadow' style={{width:'350px', height:'300px', border:'1px solid #ccc', borderRadius:'8px'}}>
//       <div className='newsletter-input-content' style={{paddingTop:'30px'}}>
//         <div className="form-group" style={{paddingLeft:'26px'}}>
//           <label htmlFor="subject">Subject: </label>
//           <input
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             style={{width:'250px'}}
//           />
//         </div>
//         <div className="form-group" style={{paddingLeft:'25px'}}>
//           <label htmlFor="content">Content: </label>
//           <textarea
//             type="text"
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows={4}
//             style={{width:'250px'}}
//           />
//         </div>
//       </div>
//     </div>
//   )}
//   <div className='newsletter-btn'>
//     <button onClick={handleSendNewsletter} style={{width:'150px', height:'40px'}}>Send Newsletter</button>
//     {error && <p className="error-message">{error}</p>}
//   </div>
// </div>

//   )
// };

// export default NewsletterSender;

import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSender = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSendNewsletter = async () => {
    try {
      const getToken = localStorage.getItem('token');
      if (!subject || !content) {
        setError('Subject and content are required');
        return;
      }

      await axios.post('/api/v1/admin/send-newsletter', { subject, content }, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      setSuccess(true);
      setError('');
    } catch (err) {
      setError('Failed to send newsletter. Please try again.');
    }
  };

  return (
    <>
    <div className="newsletter-form container" style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2 className="text-center">Send Newsletter to Users</h2>
      {success ? (
        <h4 className="text-success text-center">Newsletter sent successfully!</h4>
      ) : (
        <div className="border rounded shadow p-4">
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="form-control"
            />
          </div>
            {error && <p className="text-danger">{error}</p>}
          <div className="text-center">
            <button
              onClick={handleSendNewsletter}
              className="btn btn-primary mt-3"
              style={{ width: '150px' }}
            >
              Send Newsletter
            </button> 
          </div>          
        </div>      
          
      )}
    </div>
    </>
  );
};

export default NewsletterSender;

