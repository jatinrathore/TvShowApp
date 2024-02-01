import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { useState, useEffect } from "react";

const SummaryCard = () => {
  const { id } = useParams();
  const { data } = useData();

  let selectedData;
  if (data.length > 0) {
    selectedData = data.find((film) => film.show.id == id);
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticket: "",
  });

  const [bookings, setBookings] = useState([]);

  const [isInvalidForm, setIsInvalidForm] = useState(false);

  useEffect(() => {
    // Retrieve existing bookings from localStorage
    const existingBookings = localStorage.getItem("tvshowapp");
    if (existingBookings) {
      setBookings(JSON.parse(existingBookings));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.length < 4 ||
      formData.email.length < 15 ||
      formData.phone.length > 10 ||
      formData.phone.length < 8 ||
      formData.ticket < 0
    )
      return setIsInvalidForm(true);

    const bookingType = {
      id,
      title: selectedData?.show.name,
      formData,
    };

    const updatedBookings = [...bookings, bookingType];
    localStorage.setItem("tvshowapp", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);

    // clearing data
    setFormData({
      name: "",
      email: "",
      phone: "",
      ticket: "",
    });

    //Close modal after saving data
    $("#exampleModalCenter").modal("hide");
  };

  //removing html tags from fetched data
  const removeHTMLTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };
  const summary = removeHTMLTags(selectedData?.show.summary);

  return (
    <div className="summary--container">
      <h2 className="title">{selectedData?.show.name}</h2>
      <p className="summary">{summary}</p>

      <div className="popup">
        {/* button for modal */}
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Book tickets
        </button>

        {/* modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Book Tickets for - {selectedData?.show.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ border: "none" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="input--box">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData?.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData?.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      value={formData?.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      placeholder="No. of tickets"
                      name="ticket"
                      value={formData?.ticket}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {isInvalidForm && (
                  <div class="alert alert-danger" role="alert">
                    Please fill in the form details correctly.
                  </div>
                )}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-danger">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
