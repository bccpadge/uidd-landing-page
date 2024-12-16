import { BlogPosts } from "./components/BlogPosts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />
      <main className="">
        <h1 className="visually-hidden">UI Design Daily - Landing Page</h1>
        <Hero />
        <BlogPosts />
      </main>
      <Footer />
    </>
  )
}