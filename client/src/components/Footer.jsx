import React, { useState } from 'react'
import RefundModal from './RefundModal'

const POLICY = (
  <div>
    <p>At M.R. Ghodke Mithaiwale, we take pride in preparing and delivering our sweets fresh and with utmost care. Since our products are perishable food items, cancellations and refunds are subject to strict timelines and conditions.</p>
    <h4>1. Order Cancellation</h4>
    <ol>
      <li>Orders once placed cannot be cancelled after they are confirmed, as products are made fresh to order.</li>
      <li>Cancellation requests must be raised within 1 hour of placing the order by contacting our support team. If preparation or dispatch has already begun, cancellation will not be possible.</li>
      <li>Once an order has been processed for dispatch, cancellation is strictly not allowed.</li>
      <li>In rare cases where we are unable to fulfill an order due to unforeseen circumstances (e.g., stock unavailability, operational issues), the order will be cancelled by us, and the product value will be refunded to the original payment method.</li>
    </ol>

    <h4>2. Refund Eligibility</h4>
    <p>Due to the perishable nature of our sweets and namkeen, refunds are not offered for change of mind, courier delays, or products consumed. Refunds or replacements will only be considered for damaged in transit, incorrect product delivered, or missing items.</p>

    <h4>3. Reporting Concerns</h4>
    <p>Customers must raise complaints related to product quality, damage, or incorrect/missing items within 24 hours of delivery. All claims must be supported with photographs, invoice, and tracking history where applicable.</p>

    <h4>4. Refund & Resolution Process</h4>
    <p>Any case of refund or cancellation is at the sole discretion of M.R. Ghodke Mithaiwale. Replacements may be issued where feasible. Refunds, if approved, will be processed within 10 working days.</p>

    <h4>5. Non-Refundable Items</h4>
    <p>Products returned without prior approval, opened/tampered items, orders delayed due to incorrect addresses, and special/customized bulk orders are non-refundable.</p>

    <h4>6. Cancellation/Refund by the Company</h4>
    <p>We reserve the right to cancel orders for unserviceable locations, suspected fraud, or force majeure. In such cases, product value (excluding shipping) will be refunded.</p>

    <h4>7. Policy Updates</h4>
    <p>We may amend or update this policy at any time; updates will be posted on the website.</p>

    <h4>10. Contact Information</h4>
    <p>Email: mrghodkeandco@gmail.com<br/>Phone: 9822659209 / 9823796409<br/>Address: Ashoka center, Pune</p>
  </div>
)

export default function Footer(){
  const [open, setOpen] = useState(false)
  return (
    <footer className="footer">
    <p>© {new Date().getFullYear()} M.R Ghodke Mithaiwale — Crafted with care</p>
      <p><button onClick={()=>setOpen(true)} style={{background:'transparent',border:'none',color:'var(--brown)',cursor:'pointer',textDecoration:'underline'}}>Refund & Cancellation</button></p>
      <RefundModal open={open} onClose={()=>setOpen(false)}>
        {POLICY}
      </RefundModal>
    </footer>
  )
}
axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, { name, email, message })
  .then(res => alert("Message sent"))
  .catch(err => console.error(err))