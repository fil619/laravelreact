import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Moment} from 'react-moment';
import './form.css';

export default class Example extends Component {
    render() {
        return (

            <div className="container">

            <div style={{minWidth:'50%' , position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>

            <div className="card outer insetshadow p-1 bg-white rounded">

            <div id="accordion">
              <div className="card formcard">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Step 1: Your details
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">

                  <form>
                    <div className="row">
                      <div className="col-4 ">
                      <label htmlFor="F_Name">First Name</label><input type="text" className="form-control insetshadow" id="F_Name" />
                      </div>
                      <div className="col-4">
                      <label htmlFor="L_Name">Surname</label><input type="text" className="form-control insetshadow" id="L_Name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 ">
                      <label htmlFor="email">Email Address:</label><input type="email" className="form-control insetshadow" id="email" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                    <button type="button" className="btn nextbutton"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Next > </button>
                    </div>
                  </form>


                  </div>
                </div>
              </div>
              <div className="card acc">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Step 2: More Comments
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse second" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-4 ">
                      <label htmlFor="mobile">Telephone number</label><input type="text" className="form-control insetshadow" id="mobile" />
                      </div>
                      <div className="col-4">
                      <label htmlFor="gender">Gender</label>
                      <select defaultValue={'DEFAULT'} className="form-control insetshadow grad" id="gender">
                         <option value="DEFAULT" disabled>Select Gender</option>
                         <option value="Female">Female</option>
                         <option value="Male">Male</option>
                         <option value="Other">Other</option>
                       </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 ">
                      <label htmlFor="dob">Date of birth</label>
                        <div className="row">
                          <div className="col-3 dob">
                          <input type="text" className="form-control insetshadow" id="day" />
                          </div>
                          <div className="col-3 dob">
                          <input type="text" className="form-control insetshadow" id="month" />
                          </div>
                          <div className="col-3 dob" >
                          <input type="text"  className="form-control insetshadow" id="year"  />
                          </div>
                      </div>

                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                    <button type="button" className="btn nextbutton"  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">Next > </button>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
              <div className="card acc">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Step 3: Final Commenst
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                  <div className="row align-items-end">
                    <div className="col-7 ">

                    <div className="">
                    <label htmlFor="comment">Comments</label>
                    <textarea className="form-control insetshadow" id="comment" rows="5"></textarea>
                    </div>

                    </div>
                    <div className="col-5">
                    <div className="d-flex justify-content-end">
                    <button type="button" className="btn nextbutton" onClick={this.handleNext}>Next > </button>
                    </div>
                    </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>


            </div>
            </div>
            <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">SUCCESSFULL</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
        Record inserted successfully
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

            </div>

        );
    }
    handleNext()
    {
      var f_name = document.getElementById('F_Name').value;
      var l_name = document.getElementById('L_Name').value;
      var email  = document.getElementById('email').value;
      var mobile = document.getElementById('mobile').value;
      var gender = document.getElementById('gender').value;
      var day = document.getElementById('day').value;
      var month = document.getElementById('month').value;
      var year = document.getElementById('year').value;
      var comment= document.getElementById('comment').value;

// Javascrippt Validations to Validate Input
// Focus on the Input if Empty
if( f_name == "" ) {
  $('.collapse').collapse('show')
alert( "Please provide your First name!" );
document.getElementById("F_Name").focus() ;
return false;
}
if( l_name == "" ) {
  $('.collapse').collapse('show')
alert( "Please provide your Last name!" );
document.getElementById("L_Name").focus() ;
return false;
}
if( email == "" ) {
  $('.collapse').collapse('show')
alert( "Please provide your email address!" );
document.getElementById("email").focus() ;
return false;
}
else
{
//check for proper email format
var testmail = (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(email);
if (!testmail)
{
  alert( "Please provide a valid email address" );
  $('.collapse').collapse('show')
  document.getElementById("email").focus() ;
  return false;
}
}
if( mobile == "" ) {
  $('.second').collapse('show')
alert( "Please provide your mobile number!" );
document.getElementById("mobile").focus() ;
return false;
}
else
{
  // check if mobile number starts with 07 and is 11 digits with 0
  var test =(/(07)\d{9}$/).test(mobile);
  if (!test)
  {
    alert( "Please provide a valid mobile number! \n Mobile number should start with 07**********" );
    $('.second').collapse('show')
    document.getElementById("mobile").focus() ;
    return false;

  }
}

console.log(gender);
if( gender == 'DEFAULT' ) {
  $('.second').collapse('show')
  alert( "Please provide your gender!" );
document.getElementById("gender").focus() ;
return false;
}
if( day == "" || day < 0 || day > 31 ) {
  $('.second').collapse('show')
  alert( "Date of Birth incorrect !! \n Error in Day Field" );
document.getElementById("day").focus() ;
return false;
}
if( month == "" || month < 0 || month > 12 ) {
  $('.second').collapse('show')
  alert( "Date of Birth incorrect !! \n Error in Month Field" );
document.getElementById("month").focus() ;
return false;
}

var currentyear = new Date().getFullYear()
if( year == "" || year < 1000 || year > currentyear ) {
  $('.second').collapse('show')
  alert( "Date of Birth incorrect !! \n Error in Year Field \n Year field must be between 1000-" + currentyear );
document.getElementById("year").focus() ;
return false;
}
// use day , month , year to parse date to DD/MM/YYYY format
if (day < 10 && day.length == 1)
{
  day = '0'+day
}
if (month < 10 && month.length == 1)
{
   month = '0'+month
}
var date = year + '-' + month + '-' + day ;

axios.post('/form', {
            first_name : f_name,
            last_name : l_name,
            email  : email,
            mobileno : mobile,
            gender : gender,
            dob    : date,
            comments: comment
        })
        .then(response => {
        $("#myModal").modal()
          console.log('d1d1d1');

      })
      .then(error => {
            // this.output = error;
        });

    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
