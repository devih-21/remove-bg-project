import Layout from '../components/commons'
import Intro from '../components/front-ocr/Intro'
import About from '../components/front-ocr/About'
import Service from '../components/front-ocr/Service'
import FunFact from '../components/front-ocr/FunFact'
import Social from '../components/front-ocr/Social'
import DemoCccd from '../components/front-ocr/DemoCccd'

export default function Home() {
  return (
    <Layout>
      <Intro/>
      <About/>
      <DemoCccd/>
      <Service/>
      <FunFact/>
      <Social/>
    </Layout>
  )
}
