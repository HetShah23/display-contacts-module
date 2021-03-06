import React, {useState} from "react"
import Menubar from "./menubar"

const DisplayContacts = () => {

    // dummy data
    const demoData = [
        {
            groupID: "grp-6flbrkl35o3bsa",
            groupName: "Group 1",
        contact: [
                {
                    contactID: "contact-6flbrkl35o3m6r",
                    contactName: "mark",
                    contactNumber: "1111111111"
                },
                {
                    contactID: "contact-6flbrkl35o3tql",
                    contactName: "Sam",
                    contactNumber: "9999999999"
                },
                {
                    contactID: "contact-6flbrkl35o42og",
                    contactName: "test user",
                    contactNumber: "9198989898"
                }
            ]
        },
        {
            groupID: "grp-fvjwfc1cl3fej0cq",
            groupName: "Group 2",
            contacts: [
                {
                    contactID: "contact-fvjwfc1cl3fej75c",
                    contactName: "test",
                    contactNumber: "12334567890"
                }
            ]
        },
        {
            groupID: "grp-fvjwfc1cl3fasdfg",
            groupName: "Group 3",
            contacts: [
                {
                    contactID: "contact-fvjwfc1cl3fej75c",
                    contactName: "test",
                    contactNumber: "5555555555"
                }
            ]
        }
    ]
    
    const [activeTab, setActiveTab] = useState("numbers-list")

    return (
        <>
            <Menubar/>
            <section className="home-section mainmenu-page">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-12">
                            <div className="card-box fcard">
                                <div className="card-tt">
                                    Mobile Number
                                </div>
                                <div className="d-md-block d-flex justify-content-center align-content-center">
                                    <div className="tab">
                                        <div className="btn_tb">
                                            <button className={(activeTab === "numbers-list")? "tablinks active":"tablinks"} 
                                            onClick={() => setActiveTab("numbers-list")}
                                            id="defaultOpen">
                                            Number List</button>
                                            <button className={(activeTab === "contact-group")? "tablinks active":"tablinks"} 
                                            onClick={() => setActiveTab("contact-group")}>Contact Group</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="numberlist" className={(activeTab === "numbers-list")? "tabcontent display-block":"tabcontent display-none"}>
                                    <div className="form-group">
                                        <textarea className="form-control thadusi" id="exampleFormControlTextarea1" placeholder="Your Number Display Here"></textarea>
                                    </div>
                                    <div className="info-cir d-flex  align-items-center">
                                        <img src="assets/img/info_circle_outline.png" className="img-fluid" alt=""/><span>Your Number
                                            Display Here</span>
                                    </div>
                                </div>

                                <div id="contactgroup" className={(activeTab === "contact-group")? "tabcontent display-block":"tabcontent display-none"}>
                                    <div className="contact-group-roz">
                                        <div className="row my-hcut">
                                            <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6 px-0">
                                                <div className="tbl-header d-flex align-items-end justify-content-between">
                                                    <div className="t-title">
                                                        Group Name
                                                    </div>
                                                    <div className="t-select">
                                                        <div className="form-check form-check-inline mr-0  align-items-center">
                                                            <label className="form-check-label" htmlFor="inlineCheckbox1">Select all</label>
                                                            <input className="form-check-input mr-0" type="checkbox" name="inlineCheckbox1" id="inlineCheckbox1" value="option1"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="t-body">
                                                    <div>
                                                        <div className="form-check form-check-inline b-select mr-0  align-items-center">
                                                            <input className="numberlist form-check-input mr-0" type="checkbox" id="n1" value="n1"/>
                                                            <label className="form-check-label" htmlFor="n1">Group 1</label>
                                                        </div>
                                                        <div className="form-check form-check-inline b-select mr-0  align-items-center">
                                                            <input className="numberlist form-check-input mr-0" type="checkbox" id="n2" value="n2"/>
                                                            <label className="form-check-label" htmlFor="n2">Group 2</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnoutline-rk rkedittop">
                                                    <a href=" ">Load All Contacts</a>
                                                </div>
                                            </div>

                                            <div className="col-xl-7 col-lg-6 col-md-7 col-sm-6 pl-sm-3 pl-0 mt-sm-0 mt-4 pr-0">
                                                <div className="tbl-header d-flex align-items-end justify-content-between">
                                                    <div className="t-title">
                                                        Group Name
                                                    </div>
                                                    <div className="t-select">
                                                        <div className="form-check form-check-inline mr-0  align-items-center">
                                                            <label className="form-check-label" htmlFor="inlineCheckbox2">Select all</label>
                                                            <input className="form-check-input mr-0" type="checkbox" name="inlineCheckbox2" id="inlineCheckbox2" value="option1"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="t-body">
                                                    <div>
                                                        <div className="form-check form-check-inline b-select mr-0  align-items-center">
                                                            <input className="contactgroupss form-check-input mr-0" type="checkbox" id="m1" value="m1"/>
                                                            <label className="form-check-label" htmlFor="m1">+91 7043617802</label>
                                                        </div>
                                                        <div className="form-check form-check-inline b-select mr-0  align-items-center">
                                                            <input className="contactgroupss form-check-input mr-0" type="checkbox" id="m2" value="m2"/>
                                                            <label className="form-check-label" htmlFor="m2">+91 7043617802</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnoutline-rk rkedittop">
                                                    <a href=" ">Load Selected Contact</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-12 mt-xl-0 mt-4">
                            <div className="card-box scard">
                                <div className="card-tt d-flex justify-content-between align-items-center">
                                    <div className="mess-edit-box-my">Message</div>
                                    <div className="senderidmessage">Sender ID :
                                        <span>
                                            <select className="custom-select" id="smstemplatee" required>
                                                    <option value="">SKYSS</option>
                                                    <option value="1">SKYAS</option>
                                                    <option value="2">SKYCS</option>
                                                    <option value="3">SKYVS</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>

                                <div className="formmainmenup">

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="smstemplate">SMS Template*</label>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <select className="custom-select" id="smstemplate" required>
                                                    <option value="">Select a menu*</option>
                                                    <option value="1">Breakfast</option>
                                                    <option value="2">Lunch</option>
                                                    <option value="3">Dinner</option>
                                                </select>
                                                <div className="valid-tooltip">
                                                    Looks good!
                                                </div>
                                                <div className="invalid-tooltip">
                                                    Please choose a menu.
                                                </div>
                                                <div className="btnoutline-rk rkbtn-12">
                                                    <a href=" " className="d-flex align-items-center justify-content-around" data-toggle="modal" data-target="#addsmstemplatepop"> <img src="assets/img/addsymbol.png" alt=""/> Add</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-6  messcoledi">
                                            <label htmlFor="dltid">Dlt Template Id*</label>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <input type="text" className="form-control" id="dltid" placeholder="Type Here........" required/>
                                                <div className="valid-tooltip">
                                                    Looks good!
                                                </div>
                                                <div className="invalid-tooltip">
                                                    Please add a name.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-6  messcoledi ">
                                            <label htmlFor="name" className="d-sm-block d-none">&nbsp;</label>
                                            <select className="custom-select" id="smstemplate" required>
                                                    <option value="">Select a menu*</option>
                                                    <option value="1">Breakfast</option>
                                                    <option value="2">Lunch</option>
                                                    <option value="3">Dinner</option>
                                                </select>
                                        </div>
                                        <div className="form-group col-12 singltom">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <textarea className="form-control hadusi" id="smstype" placeholder="Type here......" required></textarea>
                                                <div className="valid-tooltip">
                                                    Looks good!
                                                </div>
                                                <div className="invalid-tooltip">
                                                    Please add a name.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="info-cir d-flex  align-items-center">
                                        <img src="assets/img/info_circle_outline.png" className="img-fluid" alt=""/><span>Your Number
                                            Display Here</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 botm-send ">
                            <div className="card-box tcard">

                                <div className="formmainmenup">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6  col-sm-6">
                                            <div className="form-row d-flex align-items-center justify-content-between   flex-row">
                                                <div className="form-group col-xl-8 col-12 d-xl-flex  d-block align-items-center ">
                                                    <label htmlFor="sendat" className="mb-0 stcs">SMS Template*</label>
                                                    <div className="d-flex align-items-center ml-xl-3 ml-0">
                                                        <input type="date" className="form-control " id="sendat" placeholder="Type Here........" required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-tooltip">
                                                            Please add a name.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group col-xl-4 col-12  mt-xl-0 mt-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <input type="time" className="form-control " id="sentile" placeholder="Type Here........" required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-tooltip">
                                                            Please add a name.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-sm-6 rmtstsn">
                                            <div className="form-row d-flex align-items-center justify-content-sm-end justify-content-center  flex-row">
                                                <div>
                                                    <div className="t-select">
                                                        <div className="form-check form-check-inline mr-0  align-items-center">
                                                            <input className="form-check-input mr-2" type="checkbox" name="sendrty" id="sendrty" value="option1"/>
                                                            <label className="form-check-label stcs rrtyc" htmlFor="sendrty">Retry
                                                                for</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group ">
                                                    <div className="d-flex align-items-center mx-2">
                                                        <input type="number" className="form-control rtycss" id="sendat" placeholder="100" required/>
                                                        <div className="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-tooltip">
                                                            Please add a name.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mr-3 stcs rsmd">
                                                    minutes approx.
                                                </div>
                                                <div className="btnoutline-rkfli ecbtnsend">
                                                    <a href=" ">Send SMS</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default DisplayContacts
