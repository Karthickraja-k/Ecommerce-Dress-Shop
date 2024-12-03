/* With url */

/* import React, { useState } from 'react';
import { Card, Input, Button, Row, Col, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const QrCodePayment = () => {
    const [url, setUrl] = useState('');
    const [qrImage, setQrImage] = useState('');

    const generateQrcode = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/scanqrcode', { url: url }).then((response) => {
            console.log(response);
            setQrImage(response.data);
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card>
                <Title level={2} style={{ textAlign: 'center', background: '#7FA08A', color: 'white', padding: '20px' }}>
                    Generate and Download Qr Code
                </Title>
                <Row gutter={16}>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Input placeholder="Enter text here" onChange={(e) => setUrl(e.target.value)} value={url} />
                        <Button type="primary" style={{ marginTop: '10px' }} onClick={generateQrcode}>
                            Generate QRcode
                        </Button>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        {url.length > 0 && qrImage ? (
                            <>
                                <a href={qrImage} download>
                                    <img src={qrImage} alt="qrImage" style={{ width: '50%', height: 'auto' }} />
                                </a>
                                <p>Scan the QR Code to Access data</p>
                            </>
                        ) : null}
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default QrCodePayment; */

/* With Bank Details */

/* import React, { useState } from 'react';
import { Card, Input, Button, Row, Col, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const QrCodePayment = () => {
    const [bankDetails, setBankDetails] = useState({
        accountNumber: '',
        bankName: '',
        // Add other relevant details
    });

    const [transactionAmount, setTransactionAmount] = useState('');

    const [qrImage, setQrImage] = useState('');

    const generateQrcode = (e) => {
        e.preventDefault();

        // Combine bank details and transaction amount into a string or format as needed
        const combinedDetails = `${bankDetails.accountNumber},${bankDetails.bankName},${transactionAmount}`;

        axios.post('http://localhost:8000/api/v1/scanqrcode', { url: combinedDetails }).then((response) => {
            console.log(response);
            setQrImage(response.data);
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card>
                <Title level={2} style={{ textAlign: 'center', background: '#7FA08A', color: 'white', padding: '20px' }}>
                    Generate and Download Qr Code
                </Title>
                <Row gutter={16}>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Input placeholder="Enter Account Number" onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })} value={bankDetails.accountNumber} />
                        <Input placeholder="Enter Bank Name" onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })} value={bankDetails.bankName} />
                        <Input placeholder="Enter Transaction Amount" onChange={(e) => setTransactionAmount(e.target.value)} value={transactionAmount} />
                        <Button type="primary" style={{ marginTop: '10px' }} onClick={generateQrcode}>
                            Generate QR Code
                        </Button>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        {bankDetails.accountNumber.length > 0 && qrImage ? (
                            <>
                                <a href={qrImage} download>
                                    <img src={qrImage} alt="qrImage" style={{ width: '50%', height: 'auto' }} />
                                </a>
                                <p>Scan the QR Code to Access data</p>
                            </>
                        ) : null}
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default QrCodePayment; */

/* ================= With Original Qr Code ================== */

/* import React, { useState } from 'react';
import Image from '../../images/qr-code.jpg'

const ImageDisplay = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get QR Code here.</button>
      {showImage && (
        <div>
          <img
            src={Image} // Replace with the actual URL of your image
            alt=" "
            style={{ maxHeight: '10%', width: '100%', maxWidth: '400px', marginTop: '20px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay; */

/* Dummy Qr code */

import React, { useState } from 'react';
import Image from '../../images/qr-code.png'; // Import your image

const ImageDisplay = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'30px' }}>
      <button onClick={handleButtonClick} 
      style={{ 
      marginBottom: '20px', 
      background: 'rgb(127,160,138)',
      border: '1px solid #ccc', /* Add a border */
      borderRadius: '5px', /* Rounded corners */
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', /* Optional shadow */ 
      }}>
        Get QR Code here.
      </button>
      {showImage && (
        <div>
          <img
            src={Image} // Replace with the actual URL of your image
            alt=" "
            style={{ height: '450px', width: '100%', maxWidth: '400px', marginTop: '20px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;



