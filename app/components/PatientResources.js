import React from 'react';

var PatientResources = React.createClass({
  render: function() {
    return (
      <div style={{padding:'40px 0 0 0'}}>
        <div className="col-sm-1" style={{backgroundColor:'clear'}}>
        </div>
        <div className="col-sm-10" style={{backgroundColor:'clear', textAlign:'left'}}>
          <table style={{borderCollapse:'separate', borderSpacing:'2.5em'}}>
            <tbody>
            
              <tr>
                <td>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <img src="http://drjasonxue.weebly.com/uploads/6/1/1/2/61127083/page-layouts-9299453_orig.jpeg" style={{width:'100%', borderWidth: 1, borderStyle:'solid', borderColor: '#ddd', padding: 6}}/>
                  </div>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <p style={{fontSize:'large', fontWeight:900}}>PHYSICAL EXERCISES</p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>HEP2go - Home Exercise Program:  <a href='http://www.hep2go.com' style={{color:'#faa732'}}>http://www.hep2go.com</a></p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <p style={{fontSize:'large', fontWeight:900}}>CONNECTING WITH OTHER HEALTH PROFESSIONALS</p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>Health Care Connect (for finding or changing a family doctor or nurse practitioner): <a href='http://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' style={{color:'#faa732'}}>http://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner</a></p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>Health Care Connect (for finding or changing a family doctor or nurse practitioner): <a href='http://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' style={{color:'#faa732'}}>http://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner</a></p>
                  </div>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <img src="http://drjasonxue.weebly.com/uploads/6/1/1/2/61127083/page-layouts-5274136_orig.jpeg" style={{width:'100%', borderWidth: 1, borderStyle:'solid', borderColor: '#ddd', padding: 6}}/>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <img src="http://drjasonxue.weebly.com/uploads/6/1/1/2/61127083/page-layouts-7172401_orig.jpeg" style={{width:'100%', borderWidth: 1, borderStyle:'solid', borderColor: '#ddd', padding: 6}}/>
                  </div>
                  <div className="col-sm-6" style={{backgroundColor:'clear'}}>
                    <p style={{fontSize:'large', fontWeight:900}}>GENERAL HEALTH</p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>Mental health: <a href='http://www.ontario.ca/page/mental-health-services' style={{color:'#faa732'}}>http://www.ontario.ca/page/mental-health-services</a></p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>Quitting smoking: <a href='http://www.ontario.ca/page/how-quit-smoking' style={{color:'#faa732'}}>http://www.ontario.ca/page/how-quit-smoking</a></p>
                    <p style={{fontSize:16, fontFamily:'Arial'}}>Exercise & falls prevention programs: <a href='http://www.ontario.ca/page/exercise-and-falls-prevention-programs' style={{color:'#faa732'}}>http://www.ontario.ca/page/exercise-and-falls-prevention-programs</a></p>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
        <div className="col-sm-1" style={{backgroundColor:'clear'}}>
        </div>
      </div>
    )
  }
});

export default PatientResources

