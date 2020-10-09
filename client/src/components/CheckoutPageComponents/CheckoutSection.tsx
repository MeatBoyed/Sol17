import React from 'react';

interface Props {}

export const CheckoutSection: React.FC<Props> = () => {
  return (
    <div id="CheckoutSection">
      <form action="submit">
        <div className="contactInfo">
          <p>Contact information</p>
          <div className="form__group">
            <input type="email" className="form__field" placeholder="emailAddress" name="emailAddress" id="emailAddress" />
            <label htmlFor="emailAddress" className="form__label">
              Email Address
            </label>
          </div>
        </div>
        <div className="shippingAddress">
          <p>Shipping Address</p>
          <div className="nameInput">
            <div className="form__group">
              <input type="text" className="form__field" placeholder="FirstName" name="FirstName" id="FirstName" required />
              <label htmlFor="FirstName" className="form__label">
                First Name
              </label>
            </div>
            <div className="form__group">
              <input type="text" className="form__field" placeholder="LastName" name="LastName" id="LastName" required />
              <label htmlFor="LastName" className="form__label">
                Last Name
              </label>
            </div>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="Address" name="Address" id="Address" required />
            <label htmlFor="Address" className="form__label">
              Address
            </label>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="City" name="City" id="City" required />
            <label htmlFor="City" className="form__label">
              City
            </label>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="Country" name="Country" id="Country" required />
            <label htmlFor="Country" className="form__label">
              Country
            </label>
          </div>
          <div className="form__group">
            <input type="number" className="form__field" placeholder="PhoneNumber" name="PhoneNumber" id="PhoneNumber" />
            <label htmlFor="PhoneNumber" className="form__label">
              Phone Number (Optional)
            </label>
          </div>
          <div className="saveInfoContainer">
            <input type="checkbox" name="SaveInfo" id="SaveInfo" />
            <h5>Save this information for next time</h5>
          </div>
        </div>
        <div className="returnContainer">
          <svg
            id="line-angle-down"
            xmlns="http://www.w3.org/2000/svg"
            width="29.108"
            height="15.849"
            viewBox="0 0 29.108 15.849"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
              transform="translate(-0.001 0.003)"
            />
          </svg>
          <h5>Return to cart</h5>
        </div>
        <button className="submitButton" type="submit">
          <h5>Continue to shopping</h5>
        </button>
      </form>
    </div>
  );
};
