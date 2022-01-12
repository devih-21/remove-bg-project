export default function FunFact(){
    return(
        <section id="counter-section" className="page bg-style1">                					
            <div id="counter-up-trigger" className="counter-up text-white parallax" data-stellar-background-ratio="0.5">
                <div className="cover"></div>
                <div className="page-header-wrapper">
                    <div className="container">
                        <div className="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                            <h2>Một vài thông tin cho bạn</h2>
                            <div className="devider"></div>
                            <p className="subtitle">Sử dụng để tận hưởng sự tiện lợi và năng suất trong công việc</p>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row">

                        <div className="fact text-center col-md-3 col-sm-6">
                            <div className="fact-inner">
                                <i className="fa fa-users fa-3x"></i>
                                <div className="extra-space-l"></div>
                                <span className="counter">50000</span>
                                <span style={{fontSize: "60px"}}>+</span>
                                <p className="lead">Lượt sử dụng hàng ngày</p>
                            </div>
                        </div>

                        <div className="fact text-center col-md-3 col-sm-6">
                            <div className="fact-inner">
                                <i className="fa fa-leaf fa-3x"></i>
                                <div className="extra-space-l"></div>
                                <span className="counter">60</span>
                                <span style={{fontSize: "60px"}}>+</span>
                                <p className="lead">Dự án sử dụng</p>
                            </div>
                        </div>

                        <div className="fact text-center col-md-3 col-sm-6">
                            <div className="fact-inner">
                                <i className="fa fa-trophy fa-3x"></i>
                                <div className="extra-space-l"></div>
                                <span className="counter">5</span>
                                <p className="lead">Chứng nhận và giải thưởng</p>
                            </div>
                        </div>

                        <div className="fact last text-center col-md-3 col-sm-6">
                            <div className="fact-inner">
                                <i className="fa fa-coffee fa-3x"></i>
                                <div className="extra-space-l"></div>
                                <span className="counter">1000</span>
                                <span style={{fontSize: "60px"}}>$</span>
                                <p className="lead">Tiết kiệm trung bình cho doanh nghiệp</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </section>
    )
}