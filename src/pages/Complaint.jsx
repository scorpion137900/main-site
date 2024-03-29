import React from 'react'
import Header from '../components/Main/Header'
import { useTranslation } from 'react-i18next'
import ComplaintForm from '../components/Complaint/ComplaintForm'

const Complaint = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header headerTitle={t("headerTitle")} firstParagraph="نحن هنا لنستمع إلى مخاوفكم ومساعدتكم في حلها بأقصى درجات الخصوصية والاحترام" secondParagraph="يرجى تقديم شكواكم عبر النموذج أدناه، ونعدكم بالتعامل معها بسرية تامة وبأقصى سرعة ممكنة لحل المشكلة.
النفسي والأسري والتربوي" showButton={false} />
      <ComplaintForm />
    </>

  )
}

export default Complaint