import {React,useEffect,useState} from 'react'
import './Footer.css'

function Footer() {
  const [currentYear,setCurrentYear] = useState('')

   useEffect(() => {
      var d = new Date();
      var year = d.getFullYear();
      setCurrentYear(year)
   },[])

    return (
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify"><i>Kalupi</i> aims to encourage competence between learners by repeatedly asking questions and answering what they can. This platform is on a give and take basis which you do not have to pay for the services.</p>
              <p><strong>To my girlfriend, Angel Quimzon, I love you and Thank you!💚</strong></p>
            </div>
          </div>
          <hr/>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; {currentYear} All Rights Reserved by 
           <i> Dekodeimos</i>.
              </p>
            </div>
  
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="https://web.facebook.com/cjausejo/"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="https://twitter.com/Charlie_Preach"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="https://www.instagram.com/ausejomagnifico/"><i class="fa fa-instagram"></i></a></li>
                <li><a class="linkedin" href="https://www.youtube.com/channel/UCxpya2uinm_2b2NTgeRgw9g"><i class="fa fa-youtube"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    )
}

export default Footer
