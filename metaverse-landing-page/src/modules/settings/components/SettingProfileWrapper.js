import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SettingProfileWrapper = () => {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const {data} = await axios.get('https://restcountries.com/v3.1/all');
  //     if(data) {
  //       setCountries([])
  //     }
  //   }
  // }, [])

  return (
    <>
      <div className="flex items-start justify-between gap-32">
        <div className="flex-1">
          <p className="text-white text-lg font-bold mt-3">Profile</p>
          <div className="flex items-center">
            <p className="w-36 text-sm text-white font-bold mb-0">Full Name</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="full_name"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Avatar</p>
            <div className="w-full flex items-center">
              <input
                type="file"
                name="avatar"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5 relative">
            <p className="w-36 text-sm text-white font-bold mb-0">Email</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="email"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
            <div
              className="select-none flex items-center absolute -right-16 -mr-1 text-xs"
              style={{ color: "#56B948" }}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> Verified
            </div>
          </div>
          <div className="flex items-center mt-5 relative">
            <p className="w-36 text-sm text-white font-bold mb-0">Phone</p>
            <div className="w-full flex items-center relative">
              <div className="font-medium absolute left-2">+84 |</div>
              <input
                type="text"
                name="phone"
                className="w-full auth-input mr-2 mb-0 py-1 pl-12"
              />
            </div>
            <div
              className="select-none flex items-center absolute -right-24 mr-2 text-xs"
              style={{ color: "#FFCE09" }}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Verify
              Now
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Address</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="address"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Country</p>
            <div className="w-full flex items-center">
              <select
                // value={country}
                // onChange={(e) => setCountry(e.target.value)}
                name="country"
                className="auth-input font-medium w-max my-0 outline-none flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed text-md px-4 py-1.5 rounded-lg"
              >
                <option value="vn">Vietnam</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-white text-lg font-bold mt-3">
            Billing Infomation
          </p>
          <div className="flex items-center">
            <p className="w-36 text-sm text-white font-bold mb-0">Name</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="name"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Company</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="company"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Tax ID</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="tax_id"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Address</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="address"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">City</p>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="city"
                className="w-full auth-input mr-2 mb-0 py-1"
              />
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="w-36 text-sm text-white font-bold mb-0">Country</p>
            <div className="w-full flex items-center">
              <select
                // value={country}
                // onChange={(e) => setCountry(e.target.value)}
                name="country"
                className="auth-input font-medium w-max my-0 outline-none flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed text-md px-4 py-1.5 rounded-lg"
              >
                <option value="vn">Vietnam</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="button"
          className="mt-5 w-max mx-auto py-1.5 px-4 rounded-lg cursor-pointer text-center bg-secondary text-white"
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default SettingProfileWrapper;
