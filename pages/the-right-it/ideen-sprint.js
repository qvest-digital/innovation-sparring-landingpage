import Image from 'next/image';
import Head from 'next/head';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Header from '../../components/the-right-it/header';
import SuccessStories from '../../components/the-right-it/success-stories';
import CTA from '../../components/the-right-it/cta';
import Footer from '../../components/footer';

import step1 from '../../public/imgs/step-1.png';

export default function TheRightIt() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Ideen-Sprint | tarent Innovation Consulting</title>
        <link rel="icon" sizes="32x32" href="/imgs/tarent-thumb-32x32.png" />
        <meta property="og:image" content={step1.src} />
      </Head>
      <Header />
      <main>
        <Content />
        <SuccessStories />
        <CTA formId="1891586f-226f-4f5e-906d-aa4bcc2d5d1f" />
      </main>
      <Footer />
    </div>
  );
}

function Content() {
  return (
    <section id="solution" className="pt-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div>
            <nav className="sm:hidden" aria-label="Back">
              <a
                href="/"
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ChevronLeftIcon
                  className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Zurück
              </a>
            </nav>
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div className="flex">
                    <a
                      href="/"
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Building The Right It
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Ideen-Sprint
                    </div>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="py-12">
          <h1>
            <span className="block text-base text-center text-tarent-red font-semibold tracking-wide uppercase">
              Den Grundstein legen mit dem
            </span>
            <span className="mt-2 block text-5xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Ideensprint
            </span>
          </h1>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg shadow-lg object-contain object-center"
                    src={step1}
                    alt="Whitney leaning against a railing on a downtown street"
                    placeholder="blur"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mt-6 prose prose-red prose-lg text-gray-500 pb-8">
              <h2>
                Kunden- und Nutzerbedürfnisse verstehen, daraus Ideen generieren
                und testen.
              </h2>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                In unserem Ideen-Sprint versetzen wir uns in den Zielkunden
                hinein, erarbeiten seine Probleme und Bedürfnisse und entwickeln
                gezielt passende und greifbare Ideen.
              </p>
            </div>
            <div className="mt-5 prose prose-red text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Unsere Workshops können remote oder vor Ort stattfinden. Wir
                richten uns ganz nach Dir.
              </p>
              <h3>Das ist für Dich drin</h3>
              <ul role="list">
                <li>2-tägiger Workshop.</li>
                <li>
                  Umfangreicher Methodenkoffer, um die besten Ideen
                  hervorzubringen.
                </li>
                <li>Ausarbeitung des Geschäftsmodells</li>
                <li>Identifikation der wichtigsten Annahmen</li>
              </ul>
              <h3>Das bringst Du mit</h3>
              <ul role="list">
                <li>Ein Strategiefeld, auf dem Du Dich bewegen möchtest.</li>
                <li>Dein Zielkundenprofil, im besten Fall als Persona.</li>
                <li>2 Tage ungestörte Zeit.</li>
              </ul>
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#cta"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tarent-red hover:bg-red-700"
                >
                  Kontaktiere Uns
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
