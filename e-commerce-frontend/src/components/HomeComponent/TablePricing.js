/* import React from 'react'

const TablePricing = () => {
    return (
        <div className=' '>

            <h1 className='text-dark text-center fw-bold  specialfortable'>Size Chart</h1>
            <div class="table-responsive mx-auto">
                <table class="table text-center specialfortable " style={{ height: "75vh" }}>
                    <thead className=''>
                        <tr className='border-0'>
                            <th className='fw-light'>Size</th>
                            <th className='fw-light'>Length</th>
                            <th className='fw-light'>Shoulder</th>
                            <th className='fw-light'>Chest</th>
                            <th className='fw-light'>Sleeve</th>
                        </tr>
                    </thead>
                    <tbody className='table-bordered  border p-1 rounded-3'>
                        <tr className=''>
                            <td className='align-middle'>6-12M</td>
                            <td className='align-middle'>13.35</td>
                            <td className='align-middle'>9.5</td>
                            <td className='align-middle'>11</td>
                            <td className='align-middle'>13.75</td>
                        </tr>
                        <tr>
                            <td className='align-middle'>1-2Y</td>
                            <td className='align-middle'>15</td>
                            <td className='align-middle'>10</td>
                            <td className='align-middle'>12</td>
                            <td className='align-middle'>4</td>
                        </tr>
                        <tr>
                            <td className='align-middle'>2-3Y</td>
                            <td className='align-middle'>16</td>
                            <td className='align-middle'>10.5</td>
                            <td className='align-middle'>12.5</td>
                            <td className='align-middle'>4.5</td>
                            {/* Add other cells with align-middle class as needed 
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default TablePricing */

import React from 'react';
import './TablePricing.css'

const TablePricing = () => {
  return (
    <div className=' '>
      <h1 className='text-dark text-center fw-bold specialfortable'>Size Chart</h1>
      <div className="table-responsive mx-auto">
        <table className="table text-center specialfortable table-bordered" style={{ height: "75vh" }}>
          <thead className=''>
            <tr className='border-0'>
              <th className='fw-light'>Size</th>
              <th className='fw-light'>Length</th>
              <th className='fw-light'>Shoulder</th>
              <th className='fw-light'>Chest</th>
              <th className='fw-light'>Sleeve</th>
            </tr>
          </thead>
          <tbody className='p-1 rounded-3'>
            <tr className=''>
              <td className='align-middle'>6-9M</td>
              <td className='align-middle'>9.8</td>
              <td className='align-middle'>9.5</td>
              <td className='align-middle'>11</td>
              <td className='align-middle'>9.7</td>
            </tr>
            <tr>
              <td className='align-middle'>1-2Y</td>
              <td className='align-middle'>15</td>
              <td className='align-middle'>10</td>
              <td className='align-middle'>12</td>
              <td className='align-middle'>4</td>
            </tr>
            <tr>
              <td className='align-middle'>2-3Y</td>
              <td className='align-middle'>16</td>
              <td className='align-middle'>10.5</td>
              <td className='align-middle'>12.5</td>
              <td className='align-middle'>4.5</td>
              {/* Add other cells with align-middle class as needed */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePricing;
