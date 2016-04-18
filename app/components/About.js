import React from 'react';

var About = React.createClass({
  render: function() {
    return (
      <div className="container-fluid" style={{padding:20}}>
        <div className="row">
          <div className="col-lg-8" style={{backgroundColor:'clear'}}>
            <div className="col-sm-4" style={{backgroundColor:'clear'}}>
              <img style={{width:'100%', padding:'20px 10px 10px 10px'}} src="http://drjasonxue.weebly.com/uploads/6/1/1/2/61127083/3152278.jpg?277"/>
            </div>
            <div className="col-sm-8" style={{backgroundColor:'clear'}}>
              <h1 style={{fontSize:'2em', fontWeight:900, }}>
                DR. JASON XUE
              </h1>
              <div style={{fontSize:16, fontFamily:'Arial'}}>
                <p>As a chiropractor, Dr. Jason Xue’s expertise is in providing excellent evidence-based treatment for musculoskeletal conditions including neck pain, and low back pain.</p>
                <p>He has a keen interest in treating sports-related injuries and rehabilitation as he has played tennis competitively at the provincial level since 2002 and has worked as a tennis professional/coach since 2005.</p>
                <p>Dr. Xue graduated with an Honours Bachelor of Science degree from York University in 2011.  While completing his undergraduate degree, he was a valuable member, and Team Captain (2010-2011), of the York University Varsity Men’s Tennis team. He and his team won two Ontario University Athletics (OUA) Tennis Championships during his tenure.</p>
                <p>Upon the completion of his degree at York University, Dr. Xue attended the Canadian Memorial Chiropractic College (CMCC) and graduated with a Doctor of Chiropractic degree with Clinic Honours in 2015.</p>
                <p>Within an interdisciplinary team model, Dr. Xue works with patients to achieve their functional goals using manual therapy, rehabilitative exercises and therapeutic modalities.</p>
                <p>As a true believer in lifelong education and professional development, Dr. Xue is currently completing the Clinical Acupuncture Certificate Program offered at CMCC.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{backgroundColor:'clear'}}>
            <div style={{fontSize:16, fontFamily:'Arial', padding:'45px 20px 20px 20px'}}>
              Dr. Xue is a member in good standing of the following professional organizations:
              <ul>
                <li>College of Chiropractors of Ontario (CCO)</li>
                <li>Canadian Chiropractic Association (CCA)</li>
                <li>Ontario Chiropractic Association (OCA)</li>
                <li>Canadian Memorial Chiropractic College (CMCC)</li>
              </ul>
              Dr. Xue enjoys maintaining a healthy and active lifestyle. In his spare time, he likes to play sports, weight train, try new recipes, and to spend time with his family.
            </div>
          </div>
        </div>
        
      </div>
    )
  }
});

export default About