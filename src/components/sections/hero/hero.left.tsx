import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from "helpers/data";
import { MdFileDownload } from "react-icons/md";

const HeroLeft = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    // Tạo link tải CV PDF
    const link = document.createElement("a");
    link.href = "/assets/SE184528_DƯƠNG VIẾT HUY.pdf";
    link.download = "CV_DUONG_VIET_HUY.pdf"; // Tên file khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // Mở CV PDF viewer trong tab mới
    window.open("/assets/CV_PDF_viewer.html", "_blank");
  };

  return (
    <div className="hero-left">
      <h3>
        Hello!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'M
        <strong className="brand-red"> Huy</strong>
      </h3>
      <Typewriter
        options={{
          strings: [
            // "Software Developer",
            // "Freelancer",
            // "MERN Stack Developer",
            // "Open Source Contributor",
            "Beginner Today, Builder Tomorrow",
            "Small Steps, 1% Progress",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          facebook={APP_DATA.FACEBOOK_URL}
          github={APP_DATA.GIT_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
          onClick={handleViewCV}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
