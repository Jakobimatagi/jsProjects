import Head from 'next/head'
import Image from 'next/image'
import BackgroundColor from '../components/BackgroundColor'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div>
      <div className="bgColor">
        <h1>Kobi's Projects</h1>
        <BackgroundColor />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </div>
  )
}
