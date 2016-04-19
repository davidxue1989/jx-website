import React from 'react';
import Clipboard from 'Clipboard';

var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    // console.log('success');
    alert('drjasonxue@gmail.com copied to clipboard');
});

clipboard.on('error', function(e) {
  console.log('clipboard copy failed');
});

var Contact = React.createClass({

  render: function() {
    return (
      
      <div className="container-fluid" style={{padding:20}}>
        <div className="row" style={{fontSize:16, fontFamily:'Arial'}}>
          <div className="col-sm-3" style={{backgroundColor:'clear'}}>
          </div>

          <div className="col-sm-6" style={{backgroundColor:'clear', textAlign:'center'}}>
            <b><i>Dr. Jason Xue</i></b> is currently working:
            <br/>
            <br/>
            <b>Tuesdays</b>, <b>Thursdays</b>, and <b>Fridays</b> from <b>9:00am to 3:00pm</b>
            <br/>
            at Green Lane Physiotherapy & Wellness
            <br/>
            <br/>
            If these times and locations do not work for you, please feel free to make a booking via email <span style={{color:'#faa732', borderBottom:'1px solid black', padding:3}}>drjasonxue@gmail.com</span>
            <button className="btn" data-clipboard-text="drjasonxue@gmail.com" style={{backgroundColor:'white', borderStyle:'solid', borderWidth:1, borderColor:'black', padding:2, margin:2}}>
              <i className="fa fa-copy" aria-hidden="true" style={{fontSize:15}}></i> 
            </button>

            <p style={{fontSize:'20px', fontWeight:700, paddingTop:30}}>
              GREEN LANE PHYSIOTHERAPY & WELLNESS
            </p>
            <p>
              181 Green Lane East, Unit # 2
              <br/>
              East Gwillimbury, ON L9N 0C9
              <br/>
              <br/>
              TEL: 289-319-0867
              <br/>
              FAX: 289-340-0326
              <br/>
              <a style={{color:'#faa732'}} href="http://physiocan.ca/greenlane-physiotherapy-wellness/">http://physiocan.ca/greenlane-physiotherapy-wellness/</a>
            </p>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1433.2475181788711!2d-79.4829295418032!3d44.07313482181811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ace1ab5814b43%3A0x113b218ef2898efd!2s181+Green+Ln+E%2C+Newmarket%2C+ON+L3Y!5e0!3m2!1sen!2sca!4v1461018865615" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
          </div>
          <div className="col-sm-3" style={{backgroundColor:'clear'}}>
          </div>
        </div>
      </div>
    )
  }
});

export default Contact