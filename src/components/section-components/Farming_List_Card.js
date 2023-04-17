import React from "react";

const Farming_List_Card = (props) => {
  return (
    <>
      <div className="">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item bg-dark text-secondary">
            <div class="accordion-header" id="headingThree">
              <div
                class="accordion-button bg-dark d-flex align-content-center  text-white border-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded={props.open_close}
                aria-controls="collapseThree"
              >
                <div className="w-100 pool-farm-img d-flex flex-wrap align-items-center justify-content-between">
                  <div
                    style={{ width: "35%" }}
                    className="d-flex align-content-center pool-farm-img"
                  >
                    <div>
                      <img
                        src={props.img1}
                        className="rounded-circle  border border-dark"
                        width={50}
                        height={50}
                      />
                      <img
                        src={props.img2}
                        className="rounded-circle border border-dark"
                        style={{ marginLeft: "-15px" }}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h5 className="text-white  ms-2">{props.title}</h5>
                  </div>
                    <div className="more-detail-farm" style={{ width: "16%" }}>
                        <h5 className="theme-color  ms-2">120%</h5>
                    </div>
                    <div className="more-detail-farm" style={{ width: "16%" }}>
                        <h5 className="text-white  ms-2">$0 LP</h5>
                    </div>
                    <div className="more-detail-farm" style={{ width: "16%" }}>
                        <h5 className="text-white  ms-2">4.434</h5>
                    </div>
                    <div className="more-detail-farm" style={{ width: "16%" }}>
                        <h5 className="text-white  ms-2">$0.00000</h5>
                    </div>
                </div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="font-family text-white">Deposit</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1">
                      <input
                        type="text"
                        placeholder="00.00"
                        className="withdraw-input w-75 form-control bg-dark border-0 text-white p-3"
                      />
                      <h6 className="theme-color mx-2 p-0 m-0">MAX</h6>
                      <button className="btn btn-primary ms-3">APROVE</button>
                    </div>
                    <h6 className="mt-2">Your balance: 156 BNB</h6>
                  </div>

                  <div className="col-md-4">
                    <h5 className="font-family text-white">Withdraw</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1">
                      <input
                        type="text"
                        placeholder="00.00"
                        className="withdraw-input w-75 form-control bg-dark border-0 text-white p-3"
                      />
                      <h6 className="theme-color mx-2 p-0 m-0">MAX</h6>
                      <button className="btn btn-primary ms-3">WITHDRAW</button>
                    </div>
                    <h6 className="mt-2">Your balance: 156 BNB</h6>
                  </div>
                  <div className="col-md-4">
                    <h5 className="font-family text-white">Pending Rewards</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 ">
                      <h5 className="text-success text-start p-0 m-0 w-50">
                        58.99 BNB
                      </h5>
                      <div className="w-50 text-end">
                        <a
                          href="#"
                          className="text-white font-family fs-5 text-decoration-none"
                        >
                          Claim
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* more detail  */}
                <div className="my-4  flex-wrap responsive-card-info d-flex align-items-center justify-content-between">
                  <div className="py-2 px-5 rounded-3">
                    <h6 className="text-white-50">APY</h6>
                    <h5 className="theme-color">20%</h5>
                  </div>
                  <div className="py-2 px-5 rounded-3">
                    <h6 className="text-white-50">STAKED</h6>
                    <h5 className="text-white">%0 LP</h5>
                  </div>
                  <div className="py-2 px-5 rounded-3">
                    <h6 className="text-white-50">TEARNED</h6>
                    <h5 className="text-white">4.343</h5>
                  </div>
                  <div className="py-2 px-5 rounded-3">
                    <h6 className="text-white-50">TOTAL VALUE LOCKED</h6>
                    <h5 className="text-white">$00.000</h5>
                  </div>
                </div>

                <div className="mt-3 d-flex align-content-center">
                  <div className="d-flex align-items-center">
                    <h6 className="text-success">Get ACT -BNB</h6>
                    <i className="material-icons text-success ms-2 fs-5">
                      visibility
                    </i>
                  </div>
                  <div className="d-flex align-items-center ms-5">
                    <h6 className="text-success">View Contract</h6>
                    <i className="material-icons text-success ms-2 fs-5">
                      visibility
                    </i>
                  </div>
                  <div className="d-flex align-items-center ms-5">
                    <h6 className="text-success">Unstaking Fee</h6>
                    <i className="material-icons text-success ms-2 fs-5">
                      info
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farming_List_Card;
