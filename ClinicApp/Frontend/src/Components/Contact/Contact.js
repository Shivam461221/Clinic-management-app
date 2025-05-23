import { ToastContainer, toast } from "react-toastify";
export default function Contact() {

  const getDetails = (event)=>{
    event.preventDefault();
    toast.success("Thank you for contacting us")
  }
  return <>
  <ToastContainer/>
    <section className="contact_section layout_padding-bottom mt-5 mb-5">
      <div className="container">
        <div className="heading_container">
          <h2>
            Get In <span> Touch</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="form_container">
              <form onSubmit={getDetails}>
                <div>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="btn_box">
                <button className="btn">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-box">
              <img src="images/contact-img.jpg" style={{width:350}} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}