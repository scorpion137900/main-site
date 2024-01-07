
import { Box, List, Typography } from '@mui/material';
import React from 'react'
import SpecialistListItem from './SpecialistListItem';
const specialists = ["اضطراب الوسواس القهري (أوسد)", "اضطراب القلق المعمم (GAD)", "اضطراب الهلع ونوبات الهلع", "العلاج السلوكي المعرفي (CBT) ", "الاكتئاب "]
const certificates = ["ماجستير الطب النفسى", " دكتوراه في الطب النفسي كلية طب من جامعة الزقازيق", "عضوية الجمعيه المصريه للطب النفسى"]
const AboutSpecialist = () => {

  return (
    <List>
      <SpecialistListItem text={"نبذة عن المختص"}>
        استشاري طب نفسي - خبرة في الطب النفسي للبالغين وطب الإدمان وأستاذ مساعد إكلينيكي أعالج الكثير من الإضطرابات النفسية من خلال التقييم والتشخيص الصحيح ومن ثم العلاج حصلت على الزمالة الكندية في الطب النفسي لعلاج الإدمان واضطرابات المزاج من جامعة بريتش كولومبيا في سنة ٢٠١٣ رقم التسجيل المزاولة: 09RM0248819


      </SpecialistListItem>
      <SpecialistListItem text={"متخصص في "}>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: 'wrap' }}>
          {specialists?.map((item, index) =>
          (
            <Typography key={index} variant="body1" sx={{ color: "white", padding: "10px", background: "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )", borderRadius: "5px" }}>
              {item}
            </Typography>

          )
          )}
        </Box>

      </SpecialistListItem>
      <SpecialistListItem text={"الشهادات "}>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: 'wrap' }}>
          {certificates?.map((item, index) =>
          (
            <Typography key={index} variant="body1" sx={{ color: "white", padding: "10px", background: "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )", borderRadius: "5px" }}>
              {item}
            </Typography>

          )
          )}
        </Box>

      </SpecialistListItem>
    </List>
  )
}

export default AboutSpecialist