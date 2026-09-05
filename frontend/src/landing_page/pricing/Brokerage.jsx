import React from 'react'

const Brokerage = () => {
  return (
    <div className="container mt-5 p-5">
      <h4 className="mb-4">Charges for account opening</h4>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th className="fw-normal text-muted py-3 ps-4">Type of account</th>
            <th className="fw-normal text-muted py-3">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 ps-4">Individual account</td>
            <td className="py-3">
              <span className="badge bg-success px-2 py-1">FREE</span>
            </td>
          </tr>
          <tr>
            <td className="py-3 ps-4">Minor account</td>
            <td className="py-3">
              <span className="badge bg-success px-2 py-1">FREE</span>
            </td>
          </tr>
          <tr>
            <td className="py-3 ps-4">NRI account</td>
            <td className="py-3">₹ 500</td>
          </tr>
          <tr>
            <td className="py-3 ps-4">HUF account</td>
            <td className="py-3">
              <span className="badge bg-success px-2 py-1">FREE</span>
              <span className="ms-2 text-muted">(online) / ₹ 500 (offline)</span>
            </td>
          </tr>
          <tr>
            <td className="py-3 ps-4">Partnership, LLP, and Corporate accounts (offline only)</td>
            <td className="py-3">₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




export default Brokerage
