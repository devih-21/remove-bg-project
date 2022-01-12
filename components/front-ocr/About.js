export default function About(){
    return(
        <section id="about-section" className="page bg-style1">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                        <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
                        <div className="devider"></div>
                        <p className="subtitle">Một vài thông tin về dịch vụ</p>
                    </div>
                </div>
            </div>
            <div className="rotate-box-1-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                                <span className="rotate-box-icon"><i className="fa fa-users"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Các loại giấy tờ hỗ trợ</h4>
                                    <p>Căn cước công dân, chứng minh thư nhân dân</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                                <span className="rotate-box-icon"><i className="fa fa-diamond"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Tính chính xác</h4>
                                    <p>Sử dụng công nghệ trí tuệ nhân tạo làm cho thông tin trích xuất có độ chính xác rất cao</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                                <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Tính tương thích cao</h4>
                                    <p>Tương tích với nhiều hệ thống, nhiều nền tảng được hỗ trợ.</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
                                <span className="rotate-box-icon"><i className="fa fa-clock-o"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Tối đa hóa thời gia</h4>
                                    <p>Thời gian trích xuất ngắn dưới 3s, làm việc trong mọi điều kiện.</p>
                                </div>
                            </a>
                        </div>
                        
                    </div> 
                </div> 
            </div>
            
            <div className="extra-space-l"></div>
        </section>
    )
}