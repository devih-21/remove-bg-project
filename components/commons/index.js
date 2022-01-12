import Head from "next/head";
// import Script from 'next/script'

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout(props){
    return(
      <>
        <Head>
          <title>OCR | eKYC</title>        
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css'></link>
          <link href='https://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'></link>

          <link rel="stylesheet" href="/inc/bootstrap/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="/inc/animations/css/animate.min.css"></link>
          <link rel="stylesheet" href="/inc/font-awesome/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="/inc/owl-carousel/css/owl.carousel.css"></link>
          <link rel="stylesheet" href="/inc/owl-carousel/css/owl.theme.css"></link>

          <link rel="stylesheet" href="/assets/css/reset.css"></link>
          <link rel="stylesheet" href="/assets/css/mobile.css"></link>
          <link rel="stylesheet" href="/assets/css/style.css"></link>


          <link rel="stylesheet" href="/assets/theme/cool-gray.css"></link>

          <script src="inc/jquery/jquery-1.11.1.min.js"></script>
          <script src="inc/bootstrap/js/bootstrap.min.js"></script>
          <script src="inc/owl-carousel/js/owl.carousel.min.js"></script>
          <script src="inc/stellar/js/jquery.stellar.min.js"></script>
          <script src="inc/animations/js/wow.min.js"></script>
          <script src="inc/waypoints.min.js"></script>
          <script src="inc/isotope.pkgd.min.js"></script>
          <script src="inc/jquery.easing.min.js"></script>
          <script src="inc/jquery.counterup.min.js"></script>
          <script src="inc/smoothscroll.js"></script>

        </Head>
        <div className="body">
          <Header/>
          {props.children}
          <Footer/>
          <ScrollToTop/>
        </div>
        <script src="/assets/js/theme.js"></script>
        <script src="inc/classie.js"></script>
      </>
    )
}