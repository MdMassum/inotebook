import React from 'react'

function ContactUs() {
  return (
    <div>
        <h2 className='text-center'>!! Lets Connect !!</h2>
        <p className='text-center'>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.</p>
        <hr />
        <div className="container">
            <h4 >Get in Touch : </h4>
            <ul>
                <li><b>Email:</b> mdemamudin726@gmail.com</li>
                <li><b>Phone:</b> +91 9973427703</li>
                <li><b>Address:</b> 123 Note Lane, Suite 456, Notetown, NT 12345, USA</li>
            </ul>
            <hr />
            <h4>Connect with Us On Social Media</h4>
            <p >Stay updated with the latest news and updates from iNotebook:</p>
            <ul>
            <li><a href="https://www.linkedin.com/in/md-emamudin-42576421b/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/m.massum_12/">Instagram</a></li>
            </ul>
            <hr />
            <h4 className='text-center'>Support</h4>
            <p>If you need any help, our support team is here to assist you. Check out our Help Center or contact our support team via email or phone.</p>
            <br />
            <p>Thank you for choosing iNotebook. We look forward to helping you make the most out of our app!</p>

        </div>
        
    </div>
  )
}

export default ContactUs