/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8m2lB8TGdkU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

function Button(props:any){
  return <div>{props.children}</div>
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-white" prefetch={false}>
            <StarIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Astral Insights</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              Horoscopes
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              Monthly Forecast
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              Astrology Guides
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              About
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-8">Your Weekly Horoscope</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                sign: "Aries",
                title: "Embrace Your Adventurous Spirit",
                excerpt:
                  "This week, Aries, your bold and courageous nature will shine. Seize new opportunities and don't be afraid to take risks.",
              },
              {
                sign: "Taurus",
                title: "Cultivate Stability and Comfort",
                excerpt:
                  "As a Taurus, you'll find yourself craving a sense of security and stability this week. Focus on creating a harmonious environment.",
              },
              {
                sign: "Gemini",
                title: "Embrace Your Curious Nature",
                excerpt:
                  "Gemini, your inquisitive mind will be in full force this week. Engage in stimulating conversations and explore new ideas.",
              },
              {
                sign: "Cancer",
                title: "Nurture Your Emotional Needs",
                excerpt:
                  "This week, Cancer, it's important to prioritize your emotional well-being. Spend time with loved ones and practice self-care.",
              },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.sign}
                    </div>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href="#" className="text-indigo-500 hover:text-indigo-700 font-medium" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Related Content</h2>
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <CalendarIcon className="h-6 w-6 text-indigo-500" />
              <span className="text-gray-700 hover:text-indigo-500">Monthly Horoscope Forecast</span>
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <BookIcon className="h-6 w-6 text-indigo-500" />
              <span className="text-gray-700 hover:text-indigo-500">Astrology Guides</span>
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <TelescopeIcon className="h-6 w-6 text-indigo-500" />
              <span className="text-gray-700 hover:text-indigo-500">Planetary Alignments</span>
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <CloudyIcon className="h-6 w-6 text-indigo-500" />
              <span className="text-gray-700 hover:text-indigo-500">Tarot Readings</span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2023 Astral Insights. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CloudyIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TelescopeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 8.633 1.114 4.456" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  )
}