import { useState } from "react"

const SupportPortal = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const categories = [
    { icon: "fa-solid fa-circle-plus", name: "Account Opening" },
    { icon: "fa-solid fa-circle-user", name: "Your Zerodha Account" },
    { icon: "fa-solid fa-circle-dot", name: "Kite" },
    { icon: "fa-solid fa-circle-dollar-to-slot", name: "Funds" },
    { icon: "fa-solid fa-circle-nodes", name: "Console" },
    { icon: "fa-solid fa-circle-info", name: "Coin" },
  ]

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* Header */}
      <div className="py-4 px-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold">Support Portal</h3>
          <button className="btn btn-primary">My tickets</button>
        </div>
        {/* Search Bar */}
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa-solid fa-magnifying-glass text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">

          {/* Left - Accordion */}
          <div className="col-md-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="border rounded mb-2"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center p-3"
                  onClick={() => toggle(index)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <i className={`${cat.icon} text-primary fs-5`}></i>
                    <span>{cat.name}</span>
                  </div>
                  <i className={`fa-solid fa-chevron-${openIndex === index ? "up" : "down"} text-primary`}></i>
                </div>
                {openIndex === index && (
                  <div className="border-top p-3 text-muted">
                    Content for {cat.name}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Sidebar */}
          <div className="col-md-4">

            {/* Announcement Box */}
            <div className="mb-4 p-3 rounded" style={{ backgroundColor: "#fff8f0", borderLeft: "4px solid #f97316" }}>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" style={{ color: "#387ED1", textDecoration: "none", fontSize: "14px" }}>
                    Additional exposure margin on securities under MWPL
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#387ED1", textDecoration: "none", fontSize: "14px" }}>
                    Offer for sale (OFS) – August 2026
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="border rounded p-3">
              <p className="fw-semibold mb-3">Quick links</p>
              <ul className="list-unstyled mb-0">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2 border-bottom pb-2">
                    <a href="#" style={{ color: "#387ED1", textDecoration: "none", fontSize: "14px" }}>
                      {index + 1}. {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPortal