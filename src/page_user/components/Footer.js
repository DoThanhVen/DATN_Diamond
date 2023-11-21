import React from "react";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className={`contact`}>
        <div className={`column`}>
          <div className={`header`}>VỀ CHÚNG TÔI</div>
          <div className={`content`}>
            <ul className={`menu`}>
              <li className={`menu-item`}>
                <a href="#">Giới thiệu về Diamond Fashion</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`column`}>
          <div className={`header`}>CHĂM SÓC KHÁCH HÀNG</div>
          <div className={`content`}>
            <ul className={`menu`}>
              <li className={`menu-item`}>
                <a href="#">Chính sách trả hàng</a>
              </li>
              <li className={`menu-item`}>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li className={`menu-item`}>
                <a href="#">Khả năng tiếp cận</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`column`}>
          <div className={`header`}>THÔNG TIN LIÊN HỆ</div>
          <div className={`content`}>
            <ul className={`menu`}>
              <li className={`menu-item`}>
                <b>Address: </b>Tòa nhà QTSC 9 (Tòa T) - Tô Ký, Phường Tân Chánh
                Hiệp, Quận 12, TP.Hồ Chí Minh
              </li>
              <li className={`menu-item`}>
                <b>Phone: </b>0999000999
              </li>
              <li className={`menu-item`}>
                <b>Email: </b>diamondshop@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className={`column`}>
          <div className={`header`}>THEO DÕI CHÚNG TÔI TRÊN</div>
          <div className={`content`}>
            <ul className={`menu`}>
              <li className={`menu-item`}>
                <a href="/#">
                  <img src="/images/facebook.jpg" alt="facebook"></img>
                </a>
              </li>
              <li className={`menu-item`}>
                <a href="/#">
                  <img src="/images/instagram.jpg" alt="Instagram" />

                </a>
              </li>
             
              <li className={`menu-item`}>
                <a href="/#">
                  <img src="/images/tiktok.jpg" alt="Tiktok"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={`certificate`}>
        <div className={`column`}>
          <div className={`heading`}> © 2023 - DIAMOND FASHION</div>
          <div className={`content`}>
            Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng
            Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM
          </div>
        </div>
        <div className={`column`}>
          <img src="/images/bo-cong-thuong.jpg" alt=""></img>
        </div>
      </div> */}
    </React.Fragment>
  );
}
export default Footer;
