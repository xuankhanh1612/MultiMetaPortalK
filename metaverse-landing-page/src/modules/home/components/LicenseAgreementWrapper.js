import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";

const LicenseAgreementWrapper = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 py-8 leading-normal">
        <div className="container">
          This License Agreement (this “Agreement”) is made as of the ______ day
          of _______________, 20______ (the “Effective Date”) by and
          among/between:
          <br />
          <strong>Owner(s)</strong>:
          _____________________________________________, (collectively, “Owner”)
          and
          <br />
          <strong>User(s)</strong>:
          _____________________________________________, (collectively, “User”).
          <br />
          The Parties agree as follows:
          <br />
          <strong>1. License.</strong> Owner owns __________ (Describe the
          Property to be Licensed) (the “Authored Work”). In accordance with
          this Agreement, Owner grants User an exclusive license to use the
          Authored Work. The Owner retains title and ownership of the Authored
          Work and derivative works will be assigned to Licensor by Licensee.
          <br />
          <strong>2. Consideration.</strong> As consideration for the license
          granted and described in this Agreement, User shall pay to Owner the
          following fees and/or royalties:
          <br />
          <div className="text-center my-2">
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="border">
                    <th scope="col" className="py-3 px-6 text-center border">
                      Type of Payment
                    </th>
                    <th scope="col" className="py-3 px-6 text-center border">
                      Payment Due Date
                    </th>
                    <th scope="col" className="py-3 px-6 text-center border">
                      Payment Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white border"
                    >
                      _________________________________
                    </th>
                    <td className="py-4 px-6 border">
                      _________________________________
                    </td>
                    <td className="py-4 px-6 border">
                      $_________________________________
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white border"
                    >
                      _________________________________
                    </th>
                    <td className="py-4 px-6 border">
                      _________________________________
                    </td>
                    <td className="py-4 px-6 border">
                      $_________________________________
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white border"
                    >
                      _________________________________
                    </th>
                    <td className="py-4 px-6 border">
                      _________________________________
                    </td>
                    <td className="py-4 px-6 border">
                      $_________________________________
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          Additional Provisions:
          _________________________________________________________________
          <br />
          Payment shall be made within __________ days of the due date. If any
          payment is not made within __________ days after the due date, Owner
          may charge: (Check one)
          <br />
          <ul>
            <li className="flex items-center">
              <input className="mr-2" type="checkbox" /> Interest of __________%
              per month charged.
            </li>
            <li className="flex items-center">
              <input className="mr-2" type="checkbox" /> A late fee of
              $____________ for each month past due.
            </li>
            <li className="flex items-center">
              <input className="mr-2" type="checkbox" /> Do not specify.
            </li>
          </ul>
          <strong>3. Term.</strong> This Agreement will commence on the
          Effective Date and will continue in full force and effect for an
          initial period of __________ year(s). User may renew the license, upon
          prior written approval from Owner.
          <br />
          <strong>4. Termination.</strong> Any violations of the provisions in
          this agreement shall automatically terminate the license provided to
          the User
          <br />
          IN WITNESS WHEREOF, the parties have entered into this Agreement as of
          the Effective Date.
          <div className="md:flex -mx-4 mt-4">
            <div className="md:w-1/2 w-full px-4 mb-16">
              <div className="text-center">
                _________________________________
              </div>
              <div className="text-center">
                <strong>Owner</strong> Signature
              </div>
            </div>
            <div className="md:w-1/2 w-full px-4 mb-16">
              <div className="text-center">
                _________________________________
              </div>
              <div className="text-center">
                <strong>User</strong> Signature
              </div>
            </div>
          </div>
          <div className="md:flex -mx-4">
            <div className="md:w-1/2 w-full px-4 mb-16">
              <div className="text-center">
                _________________________________
              </div>
              <div className="text-center">
                <strong>Owner</strong> Full Name
              </div>
            </div>
            <div className="md:w-1/2 w-full px-4 mb-16">
              <div className="text-center">
                _________________________________
              </div>
              <div className="text-center">
                <strong>User</strong> Full Name
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default React.memo(LicenseAgreementWrapper);
