
import Footer from './components/Footer'
import Hero from './components/Hero'
import styles from './page.module.css'
export const metadata = {
  title: 'Home Page'
}
export default function Home() {
  return (
    <main className={styles.main}>
    <Hero />
      <div>
        <h1 className='text-center mt-5 text-danger'>Home Page</h1>
      </div>
      <Footer />
    </main>
  )
}
