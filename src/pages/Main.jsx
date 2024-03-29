import AccordionSection from "../components/Main/AccordionSection";
import Blog from "../components/Blog/Blog";
import Features from "../components/Main/Features/Features";
import FeaturesList from "../components/Main/Features/FeaturesList";
import Header from "../components/Main/Header";
import Points from "../components/Main/Point/Points";
import SpecialistsList from "../components/Main/SpecialistsList";
import StepsToStart from "../components/Main/Features/StepsToStart";
import Box from "@mui/material/Box";
import SpecialistSlider from "../components/Main/SpecialistSlider/SpecialistSlider";
import { useTranslation } from "react-i18next";
const Main = () => {
  const { t } = useTranslation();
  return (
    <>

      <Header headerTitle={t("headerTitle")} firstParagraph="جلسات نفسية وأسرية ، بكل سهولة وخصوصية" secondParagraph=" نسهِّل وصولك لأفضل المختصين في العلاج والإرشاد النفسي والأسري والتربوي" showButton={true} />
      <StepsToStart />
      {/* <Features /> */}
      <Box sx={{
        backgroundColor: "light.main",

        position: "relative",
        background: "radial-gradient(circle at top left,rgba(255,255,255,.5) 50%,rgba(255,255,255,.5) 100%),url(https://dsv-mhpss.com/store/1/arrangement-optimism-concept-elements.jpg) no-repeat center center/cover fixed",
      }}>
        <FeaturesList />
        <SpecialistsList />

      </Box>
      <SpecialistSlider />
      <Points />
      <Blog />
      <AccordionSection />

    </>
  );
};

export default Main;
