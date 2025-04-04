export const Contact = () => {
    const handleFormSubmit = (fromData) => {
        const formInputData = Object.fromEntries(fromData.entries());   
        console.log(formInputData);
    };  //Direct Connect with backend - In React19

    return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>       
      <div className="contact-wrapper container">

        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"  //add name attribute - necessary
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>

        </form>
      </div>         
    </section>
    )
}
