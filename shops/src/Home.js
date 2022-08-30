import React from "react";
import MyCarousel from "./Carousel";
import "./App.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Divider, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Home = () => {
  const goleft = () => {
    document.getElementById("sweetcarousel").scrollLeft -= 220;
  };
  const goright = () => {
    document.getElementById("sweetcarousel").scrollLeft += 220;
  };
  return (
    <div>
      <MyCarousel />
      <p className="heading">• • Popular Items • •</p>
      <div className="sweetcarouselparent">
        <div className="carouselbtn" onClick={goleft}>
          <ArrowBackIosIcon sx={{ color: "white", marginLeft: "8px" }} />
        </div>
        <div id="sweetcarousel" className="sweetscarousel">
          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/46/8E/EE/99F79491803B73EE5E595F35FD_1601377931546.jpg?output-format=webp"
            />
            <p className="sweetname">Burfi</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/8D/BE/2B/F7ABDB9174C6E382E3C0AFEC24_1601377949409.png?output-format=webp"
            />
            <p className="sweetname">Gulab Jamun</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image2.jdomni.in/banner/29092020/E6/01/0B/062554AC29E8E7F7D8ABA50BB8_1601377968296.png?output-format=webp"
            />
            <p className="sweetname">Soan Papdi</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/0E/91/6B/BD1F7C8CFD51A7B0001FD7F05D_1601378334221.jpg?output-format=webp"
            />
            <p className="sweetname">Rasgulla</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/C5/B3/22/40C3D9E18F29F8116EF7430C8F_1601383569706.png?output-format=webp"
            />
            <p className="sweetname">Cham Cham</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/E0/D7/1B/EB3EED9B14BC8E64D03905C639_1601385862543.png?output-format=webp"
            />
            <p className="sweetname">Rasmalai</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image2.jdomni.in/banner/29092020/8D/BF/53/654F4AB026C6518C4E97D91213_1601384620509.png?output-format=webp"
            />
            <p className="sweetname">Modak</p>
          </div>

          <div className="sweetcard">
            <img
              className="sweetpic"
              alt=""
              src="https://image3.jdomni.in/banner/29092020/87/5D/5C/9E695B564CE8A98F159BCC71D3_1601384755423.png?output-format=webp"
            />
            <p className="sweetname">Jalebi</p>
          </div>
        </div>
        <div onClick={goright} className="carouselbtn">
          <ArrowForwardIosIcon sx={{ color: "white", marginLeft: "5px" }} />
        </div>
      </div>
      <div className="aboutdiv">
        <img
          alt=""
          src="https://image3.jdomni.in/banner/01102020/2E/FB/0B/B5397B6A8B0429E0CDBC46F7F6_1601540551867.png?output-format=webp"
        />
        <div className="aboutcontent">
          <p className="heading">• • About Us • •</p>
          <p className="aboutus">
            After serving so many customers, today we can proudly say that our
            shop, Sweet Junction, situated at Malad West, Mumbai, Maharashtra,
            is home to a wide range of sweets that cater to the diverse taste
            buds of every patron. All of our delicacies are made using unique
            recipes that will leave a memorable aftertaste in your mouth. You
            can call for sweets in times of sudden sweet cravings or when you
            wish to complete a meal with a delightful dessert.
          </p>
        </div>
      </div>
      <p className="heading">• • Gallery • •</p>
      <div className="galary">
        <img
          className="galaryimg"
          alt=""
          src="https://image3.jdomni.in/banner/29092020/50/B8/A2/59A2B8076A2ED68865BCE9B5B0_1601398043957.jpg?output-format=webp"
        />
        <img
          className="galaryimg"
          alt=""
          src="https://image2.jdomni.in/banner/29092020/6A/BC/78/B4729546909848CD1306E4D0B2_1601398042277.jpg?output-format=webp"
        />
        <img
          className="galaryimg"
          alt=""
          src="https://image1.jdomni.in/banner/29092020/43/3B/8D/9866BDEFECCF4FD185827E70CF_1601398039750.jpg?output-format=webp"
        />
        <img
          className="galaryimg"
          alt=""
          src="https://content.jdmagicbox.com/quickquotes/images_main/rasmalai-0-5-kg-210963825-x26ia.jpg"
        />
        <img
          className="galaryimg"
          alt=""
          src="https://content.jdmagicbox.com/quickquotes/images_main/bikano-indian-sweets-21-06-2021-122-230169481-vwyf8.jpg"
        />
        <img
          className="galaryimg"
          alt=""
          src="https://content.jdmagicbox.com/quickquotes/images_main/1000-ml-bar-100-percent-natural-ice-cream-374837032-z1el4.jpg"
        />
      </div>
      <p className="heading">• • Contact Us • •</p>

      <div className="contactusform">
        <div className="contactusfomat">
          <div className="inputss">
            <input className="inputofcontact" placeholder="Enter name" />
            <input
              className="inputofcontact"
              placeholder="Enter mobile number"
              type="Number"
            />
            <input className="inputofcontact" placeholder="Enter mail id" />
          </div>

          <textarea className="inputofcontactmsg" placeholder="Enter message" />
        </div>
        <div className="sendbtn">Submit</div>
      </div>
      <Divider variant="middle" />
      <div className="footerparent">
        <div className="footer">
          <p className="p1">Change languages: </p>
          <p className="p2">हिंदी</p>
          <p className="p3">English</p>
          <p className="p4">मराठी</p>
          <p className="p5">বাংলা</p>
          <p className="p6">தமிழ்</p>
          <p className="p7">ಕನ್ನಡ</p>
          <p className="p8">മലയാളം</p>
          <p className="p10">ਪੰਜਾਬੀ</p>
        </div>
        <div style={{marginTop:"20px"}}>
            <Tooltip title="Linkdn">
            <LinkedInIcon sx={{color:"blue",cursor:"pointer",margin:"0px 5px"}}/>
            </Tooltip>
            <Tooltip title="Instagram">
            <InstagramIcon sx={{color:"#ff1493",cursor:"pointer",margin:"0px 5px"}}/>
            </Tooltip>
            <Tooltip title="Github"><GitHubIcon sx={{cursor:"pointer",margin:"0px 5px"}}/></Tooltip>
            <Tooltip title="Facebook"><FacebookIcon sx={{color:"#3b5998",cursor:"pointer",margin:"0px 5px"}}/></Tooltip>
            
            <Tooltip title="Youtube"><YouTubeIcon sx={{color:"red",cursor:"pointer",margin:"0px 5px"}}/></Tooltip>
            
        </div>
      </div>
    </div>
  );
};

export default Home;