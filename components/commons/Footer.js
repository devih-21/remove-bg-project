export default function Footer(){
  return(
    <>
      <footer className="text-off-white">
        <div className="footer-top">
          <div className="container">
              <div className="row wow bounceInLeft" data-wow-delay="0.4s">

                    <div className="col-sm-6 col-md-4">
                      <h4>Hữu ích</h4>
                        <ul className="imp-links">
                          <li><a href="#">Trang chủ</a></li>
                          <li><a href="#">Đặc điểm</a></li>
                          <li><a href="#">Bản quyền</a></li>
                          <li><a href="#">Quảng cáo</a></li>
                          <li><a href="#">Chính sách</a></li>
                        </ul>
                    </div>
                
                  <div className="col-sm-6 col-md-4">
                      <h4>Theo dõi chúng tôi</h4>
                      <div id="footer_signup">
                          <div id="email">
                            <form id="subscribe" method="POST">
                              <input type="text" placeholder="Nhập Email của bạn" name="email" id="address" data-validate="validate(required, email)"/>
                              <button type="submit">Submit</button>
                              <span id="result" className="section-description"></span>
                            </form> 
                          </div>
                        </div> 
                        <p>Nhận thông tin khi chúng tôi có sự thay đổi một cách nhanh chóng nhất.</p> 
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <h4>Recent Tweets</h4>
                        <div className="single-tweet">
                          <div className="tweet-content"><span>@Devih </span>Good</div>
                          <div className="tweet-date">1 Hour ago</div>
                        </div>
                        <div className="single-tweet">
                          <div className="tweet-content"><span>@Devih </span>Good</div>
                          <div className="tweet-date">1 Hour ago</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="footer">
            <div className="container text-center wow fadeIn" data-wow-delay="0.4s">
              <p className="copyright">Copyright &copy; 2021 Devih. All right reserved.</p>
            </div>
        </div>
      </footer>
    </>
  )
}