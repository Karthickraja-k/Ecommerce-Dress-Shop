// import React, { useState } from 'react';
// import axios from 'axios';
// import { MDBDataTable } from 'mdbreact';
// import jsPDF from 'jspdf'; 
// import 'jspdf-autotable'; 

// const TotalSalesByDay = () => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [salesData, setSalesData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSearch = async () => {
//         if (!startDate || !endDate) {
//             setError('Please select both start and end dates');
//             return;
//         }

//         try {
//             setLoading(true);
//             setError('');

//             const response = await axios.get(`/api/v1/admin/order/get-total-sales?startDate=${startDate}&endDate=${endDate}`);
//             console.log(response)
//             setSalesData(response.data.data);
//         } catch (error) {
//             setError('Error fetching total sales data');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Calculate sum of total sales
//     const totalSalesSum = salesData.reduce((acc, curr) => acc + curr.totalSales, 0);

//     //Define table data
//     const tableData = {
//         columns: [
//             {
//                 label: 'ID',
//                 field: '_id',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Date',
//                 field: 'date',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Product Name',
//                 field: 'name',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Total Sales',
//                 field: 'totalSales',
//                 sort: 'asc'
//             },

//         ],
//         rows: salesData.map((item, index) => ({
//             id: item._id,
//             date: `${item._id.year}-${item._id.month}-${item._id.day}`,            
//             totalSales: item.totalSales,
//         }))
//     };    
    

//     console.log(salesData, salesData)

//     // Function to download PDF report
//     const downloadReport = () => {
//         const doc = new jsPDF();

//         // Add a title to the PDF
//         doc.text('Sales Report', 14, 16);

//         // Define the columns for the PDF table
//         const columns = ["ID", "Date", "Total Sales"];

//         // Map the sales data to rows for the PDF table
//         const rows = salesData.map((item) => [
//             item.id,
//             `${item._id.year}-${item._id.month}-${item._id.day}`,            
//             item.totalSales,
//         ]);

//         // Add the table to the PDF
//         doc.autoTable({
//             startY: 20,
//             head: [columns],
//             body: rows,
//         });

//         // Add total sales at the bottom
//         doc.text(`Total Sales: ${totalSalesSum}`, 14, doc.autoTable.previous.finalY + 10);

//         // Save the PDF document
//         doc.save('sales_report.pdf');
//     };

//     return (
//         <div className='container'>
//             <h2 style={{ marginTop: '20px' }}>Sales Report</h2>
//             <div className='d-flex' style={{ marginTop: '50px' }}>
//                 <div style={{ marginRight: '30px' }}>
//                     <label htmlFor="startDate">Start Date: </label>
//                     <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//                 </div>
//                 <div style={{ marginRight: '30px' }}>
//                     <label htmlFor="endDate">End Date: </label>
//                     <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//                 </div>
//                 <button onClick={handleSearch}
//                 className='search-btn'>
//                     Search
//                 </button>

//                 <button onClick={downloadReport} 
//                 className='download-btn'>
//                 Download Report as PDF
//             </button>

//             </div>
//             {loading && <div>Loading...</div>}
//             {error && <div>Error: {error}</div>}
//             <MDBDataTable
//                 striped
//                 bordered
//                 hover
//                 data={tableData}
//                 className='text-center'
//             />
//             <div>
//                 <h4 style={{ fontWeight: '200px', textAlign: 'right', color: 'rgb(63, 127, 223)' }}>Total Sales: {totalSalesSum}</h4>
//             </div>
//             {/* Button to download PDF */}
//             {/* <button onClick={downloadReport} style={{ marginTop: '20px' }}>
//                 Download Report as PDF
//             </button> */}
//         </div>
//     );
// };

// export default TotalSalesByDay;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TotalSalesByDay = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salesData, setSalesData] = useState([]);
    const [productNames, setProductNames] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!startDate || !endDate) {
            setError('Please select both start and end dates');
            return;
        }

        try {
            setLoading(true);
            setError('');

            const response = await axios.get(`/api/v1/admin/order/get-total-sales?startDate=${startDate}&endDate=${endDate}`);
            setSalesData(response.data.data);
            await fetchProductNames(response.data.data);
        } catch (error) {
            setError('Error fetching total sales data');
        } finally {
            setLoading(false);
        }
    };

    const fetchProductNames = async (salesData) => {
        const productIds = Array.from(new Set(salesData.flatMap(item => item._id.product)));
        const response = await axios.get(`/api/v1/products?ids=${productIds.join(',')}`); // Adjust the API endpoint as needed
        const names = response.data.data.reduce((acc, product) => {
            acc[product._id] = product.name; // Assuming product has an _id and name
            return acc;
        }, {});
        setProductNames(names);
    };

    const totalSalesSum = salesData.reduce((acc, curr) => acc + curr.totalSales, 0);

    const tableData = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc'
            },
            /* {
                label: 'Product Name',
                field: 'productName',
                sort: 'asc'
            }, */
            {
                label: 'Date',
                field: 'date',
                sort: 'asc'
            },
            {
                label: 'Total Sales',
                field: 'totalSales',
                sort: 'asc'
            }
        ],
        rows: salesData.map((item) => ({
            id: item._id.product[0],
            // productName: productNames[item._id.product[0]] || 'Unknown',
            date: `${item._id.year}-${String(item._id.month).padStart(2, '0')}-${String(item._id.day).padStart(2, '0')}`,
            totalSales: item.totalSales,
        }))
    };

    const downloadReport = () => {
        const doc = new jsPDF();
        doc.text('Sales Report', 14, 16);

        const columns = ["ID", "Product Name", "Date", "Total Sales"];
        const rows = salesData.map((item) => [
            item._id.product[0],
            // productNames[item._id.product[0]] || 'Unknown',
            `${item._id.year}-${String(item._id.month).padStart(2, '0')}-${String(item._id.day).padStart(2, '0')}`,
            item.totalSales,
        ]);

        doc.autoTable({
            startY: 20,
            head: [columns],
            body: rows,
        });

        doc.text(`Total Sales: ${totalSalesSum}`, 14, doc.autoTable.previous.finalY + 10);
        doc.save('sales_report.pdf');
    };

    return (
        <div className='container'>
            <h2 style={{ marginTop: '20px' }}>Sales Report</h2>
            <div className='d-flex' style={{ marginTop: '50px' }}>
                <div style={{ marginRight: '30px' }}>
                    <label htmlFor="startDate">Start Date: </label>
                    <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div style={{ marginRight: '30px' }}>
                    <label htmlFor="endDate">End Date: </label>
                    <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button onClick={handleSearch}>Search</button>
                <button onClick={downloadReport} style={{ marginLeft: '10px' }}>Download Report as PDF</button>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <MDBDataTable
                striped
                bordered
                hover
                data={tableData}
                className='text-center'
            />
            <div>
                <h4 style={{ fontWeight: '200px', textAlign: 'right', color: 'rgb(240, 53, 199)' }}>Total Sales: {totalSalesSum}</h4>
            </div>
        </div>
    );
};

export default TotalSalesByDay;


