import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import TopSection from "../TopSection";
const details = [
  {
    title: " كيف أجد المختص المناسب؟",
    content:
      " من طريق الفلاتر، بإمكانك تحديد المشكلة التي تبحث عن حل لها، السعر  المناسب لك، ونوع المختص",
  },
  {
    title: " ماهي طريقة التواصل مع المختصين؟",
    content:
      "يمكنك التواصل مع المختصين عبر الاتصال الصوتي أو الفيديو أو المحادثة من داخل التطبيق",
  },
  {
    title: " ماهي طريقة حجز جلسة ؟",
    content:
      " تحميل تطبيق لبيه، وإنشاء حساب خاص بك، ثم الدخول على صفحة المختصين وبعدها اختيار المختص المناسب، ومن ثم حجز جلسة بعد ذلك، تواصل بكل خصوصية مع المختص في صفحة المواعيد عبر الشات او الاتصال الصوتي او الفيديو بعدها تقييم الجلسة",
  },
];
const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ position: "relative", pt: "150px" }}>
      <TopSection />
      <Container maxWidth="xl" >
        <Typography
          component={"h5"}
          variant={"h5"}
          sx={{
            fontWeight: "700",
            mb: "30px",
          }}
          className="text-gradient"
        >

          أسئلة حول المعالجين النفسيين
        </Typography>

        {details.map((item, index) => (
          <Accordion

            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}

            >
              <Typography color={"text.secondary"} sx={{ fontWeight: "600", }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "opacity-bg.main" }}>
              <Typography color={"main.primary"} fontWeight="600">
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default AccordionSection;
