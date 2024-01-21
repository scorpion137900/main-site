import React from 'react'


import { Avatar, Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'

import Comments from '../components/BlogDetails/Comments'
import { ThumbUp } from '@mui/icons-material'
import AvatarCard from '../components/AvatarCard'



const BlogDetails = () => {
  return (
    <>

      <Box sx={{
        minHeight: "250px",
        // backgroundColor: " #e5e5f780",
        // opacity: " 0.5",
        backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f780 10px ), repeating-linear-gradient( #03aeaf55, #03aeaf80 )",
        // backgroundColor: "#03aeaf80",
        // backgroundImage: "url('https://www.transparenttextures.com/patterns/brushed-alum.png')",
        // backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')",
        backgroundAttachment: "fixed",
        position: "relative",
        marginBottom: "200px",
        borderBottomRightRadius: "200px",
        paddingTop: "80px",

      }}>
        <Container maxWidth="xl" sx={{

        }}>
          <Stack direction="row" spacing={1} sx={{
            position: "relative", top: "50px"
          }}>
            <Chip label="primary" color="primary" />
            <Chip label="primary" color="primary" />
            <Chip label="primary" color="primary" />
            <Chip label="primary" color="primary" />
            <Chip label="primary" color="primary" />
          </Stack>
          <Typography variant='h4'
            // className='text-gradient'
            sx={{
              position: "relative",
              top: "80px",
              color: "light.main"
            }}>
            أسباب الكابوس.. متى يشكل الكابوس علامة أو تهديداً للصحة  النفسية؟

          </Typography>
          <Box sx={{
            position: "relative",
            top: "130px",
          }}>
            <Box as="img"
              src="https://labayh.net/wp-content/uploads/2024/01/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%86%D8%B1%D9%89-%D9%83%D9%88%D8%A7%D8%A8%D9%8A%D8%B3%D8%9F-720x405.jpg"
              sx={{
                width: "100%",
                maxHeight: "600px",
                height: "auto",
                objectFit: "cover",

                borderRadius: "5px",
              }} />
            <Box sx={{
              opacity: .6,
              backgroundColor: "main",
              p: "5px",
              borderRadius: "5px",
              position: "absolute",
              top: "0px",
              right: "0",
              width: "fit-content",
              color: "light.main",
              fontSize: "12px",
              fontWeight: "700"
            }}>
              20 /11/ 2023
            </Box>
            <AvatarCard w={"100px"} h={"100px"} fz={"17px"} fz2={"15px"} fz3={"12px"} />

          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl">
          <Typography variant='p' color={"text.main"} sx={{
            fontWeight: "bold"
          }}>
            قد تستيقظ من النوم بسبب كابوس مزعج مع مشاعر مختلطة من الخوف والرعب، عليك أن تعرف بأنك لست وحدك، يعتقد البالغون أن الأطفال فقط من يعانون من الكوابيس، والحقيقة أن الكوابيس أكثر شيوعاً عند الأطفال فعلاً لكنها تصيب البالغين بكثرة أيضاً. قد تبدأ الكوابيس عند الأطفال بعمر 3-6 سنوات وتميل إلى الانخفاض بعد سن العاشرة، وبعض الناس تستمر لديهم الكوابيس حتى عندما يصبحون بالغين وقد تستمر طوال حياتهم، عند استمرار الكوابيس لفترات طويلة من الحياة وبشكل متكرر قد يعني هذا أنك مصاب باضطراب الكابوس. في هذا المقال سنتحدث عن الكوابيس وأسبابها، وكيف يمكن علاجها. أسباب الكابوس وعلاقته مع النفس البشريّة ما هي الكوابيس؟ الكوابيس هي أحلام مزعجة وواقعية بشكل واضح، تقوم بتحريك عقلك الباطن ودفعك للاستيقاظ، وغالبًا ما تجعلك تشعر بأن قلبك ينبض من الخوف، تميل الكوابيس غالباً للحدوث أثناء مرحلة حركة العين السريعة (REM)، في هذه المرحلة تحدث الأحلام والتي قد تتحول إلى كوابيس. مرحلة حركة العين السريعة تحدث بعد الخلود للنوم ب 90 دقيقة، نظراً لأن فترة حركة...

          </Typography>
          <Comments />
        </Container>
      </Box>
    </>
  )
}

export default BlogDetails