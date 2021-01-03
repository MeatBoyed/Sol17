import React, { useState } from 'react';

interface Props {}

interface UserData {
  email: string,
  firstName: string,
  lastName: string,
  country: string,
  city: string,
  address: string,
  phoneNumber: string 
}

export const CheckoutSection: React.FC<Props> = () => {

  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")

  const SubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    // Create UserData object
    const userData: UserData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      address: address,
      phoneNumber: phoneNumber
    }

    console.log(userData)

    // Get ShoppingCart info
    // Create ShoppingCart object
    // Create doc and post
  }

  return (
    <div id="CheckoutSection">
      <form action="submit" onSubmit={SubmitHandler}>
        <div className="contactInfo">
          <p>Contact information</p>
          <div className="form__group">
            <input type="email" className="form__field" placeholder="emailaddress" name="emailaddress" id="emailaddress" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="emailaddress" className="form__label">
              Email address
            </label>
          </div>
        </div>
        <div className="shippingaddress">
          <p>Shipping address</p>
          <div className="nameInput">
            <div className="form__group">
              <input type="text" className="form__field" placeholder="firstName" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <label htmlFor="FirstName" className="form__label">
                First Name
              </label>
            </div>
            <div className="form__group">
              <input type="text" className="form__field" placeholder="lastName" name="lastName" id="lastName" value={lastName}  onChange={e => setLastName(e.target.value)} required />
              <label htmlFor="lastName" className="form__label">
                Last Name
              </label>
            </div>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="country" name="country" id="country" value={country} onChange={e => setCountry(e.target.value)} required />
            <label htmlFor="country" className="form__label">
              Country
            </label>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="City" name="city" id="city" value={city} onChange={e => setCity(e.target.value)} required />
            <label htmlFor="city" className="form__label">
              City
            </label>
          </div>
          <div className="form__group">
            <input type="text" className="form__field" placeholder="address" name="address" id="address" value={address} onChange={e => setAddress(e.target.value)} required />
            <label htmlFor="address" className="form__label">
              Address 
            </label>
          </div>
          <div className="form__group">
            <input type="number" className="form__field" placeholder="PhoneNumber" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            <label htmlFor="phoneNumber" className="form__label">
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
