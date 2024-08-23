import daniel from '../public/image-daniel.jpg'
import jonathan from '../public/image-jonathan.jpg'
import jeanette from '../public/image-jeanette.jpg'
import patrick from '../public/image-patrick.jpg'
import kira from '../public/image-kira.jpg'
import quotation from '../public/bg-pattern-quotation.svg'


function App() {

  return (
    <>

      <main className="grid grid-cols-1 lg:place-items-center w-full h-screen">
        <section className="grid grid-cols-1 gap-6 lg:gap-5 lg:grid-cols-4 mx-6 my-[4.6rem] max-w-[66rem]">

            <article className="relative lg:w-full col-span-1 lg:col-span-2 px-[30.5px] py-[28px] lg:p-[28px] shadow-lg bg-violet rounded-lg">
              <img src={quotation} alt={quotation}  className='absolute top-0 right-5 lg:right-14 z-0'/>
              <div className="relative z-10 mb-4 flex items-center gap-4">
                <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-lightGrayBlue/40'>
                  <img src={daniel} alt={daniel} className='w-full'/>
                </div>
                <div>
                  <h4 className="text-[13px] lg:font-semibold text-lightGrayBlue/80 font-semibold">Daniel Clifford</h4>
                  <p className="text-[13px] leading-3 text-lightGrayBlue/50">Verified Graduate</p>
                </div>
              </div>
              <h3 className="relative z-10 text-[20px] leading-6 font-bold text-lightGrayBlue text-left">I received a job offer mid-course, and the subjects I learned were current, if not more so, 
              in the company I joined. I honestly feel I got every penny’s worth.</h3>
              <p className="relative z-10 text-[13px] leading-4 text-lightGrayBlue/50 mt-4">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
            </article>

            <article className="lg:w-full col-span-1 px-[30.5px] py-[28px] lg:p-[28px] shadow-lg bg-grayishBlue rounded-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-lightGrayBlue/40'>
                  <img src={jonathan} alt={jonathan} className='w-full'/>
                </div>
                <div>
                  <h4 className="text-[13px] lg:font-semibold text-lightGrayBlue/80 font-semibold">Jonathan Walters</h4>
                  <p className="text-[13px] lg:leading-3 text-lightGrayBlue/50">Verified Graduate</p>
                </div>
              </div>
              <h3 className="text-[20px] leading-6 font-bold text-lightGrayBlue text-left">The team was very supportive and kept me motivated</h3>
              <p className="text-[13px] leading-4 text-lightGrayBlue/50 mt-4">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I’ve made in myself. ”</p>
            </article>

            <article className="lg:w-full lg:order-4 col-span-1 shadow-lg px-[30.5px] py-[28px] lg:p-[28px] bg-lightGrayBlue rounded-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-lightGrayBlue/40'>
                  <img src={jeanette} alt={jeanette} className='w-full'/>
                </div>
                <div>
                  <h4 className="text-[13px] lg:font-semibold text-blackishBlue/80 font-semibold">Jeanette Harmon</h4>
                  <p className="text-[13px] lg:leading-3 text-blackishBlue/50">Verified Graduate</p>
                </div>
              </div>
              <h3 className="text-[20px] leading-6 font-bold text-blackishBlue text-left">An overall wonderful and rewarding experience</h3>
              <p className="text-[13px] leading-4 text-blackishBlue/50 mt-4">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
              while doing something I love. ”</p>
            </article>

            <article className="lg:w-full lg:order-5 col-span-1 shadow-lg lg:col-span-2 px-[30.5px] py-[28px] lg:p-[28px] bg-blackishBlue rounded-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-violet/90'>
                  <img src={patrick} alt={patrick} className='w-full'/>
                </div>
                <div>
                  <h4 className="text-[13px] lg:font-semibold text-lightGrayBlue/80 font-semibold">Patrick Abrams</h4>
                  <p className="text-[13px] lg:leading-3 text-lightGrayBlue/50">Verified Graduate</p>
                </div>
              </div>
              <h3 className="text-[20px] leading-6 font-bold text-lightGrayBlue text-left">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
              learning from their experiences was easy.</h3>
              <p className="text-[13px] leading-4 text-lightGrayBlue/50 mt-4">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”</p>
            </article>

            <article className="lg:w-full lg:order-3 col-span-1 shadow-lg lg:row-span-2 px-[30.5px] py-[28px] lg:p-[28px] bg-lightGrayBlue rounded-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className='h-8 w-8 rounded-full overflow-hidden border-2 border-lightGrayBlue/40'>
                  <img src={kira} alt={kira} className='w-full'/>
                </div>
                <div>
                  <h4 className="text-[13px] lg:font-semibold text-blackishBlue/80 font-semibold">Kira Whittle</h4>
                  <p className="text-[13px] lg:leading-3 text-blackishBlue/50">Verified Graduate</p>
                </div>
              </div>
              <h3 className="text-[20px] leading-6 font-bold text-blackishBlue text-left">Such a life-changing experience. Highly recommended!</h3>
              <p className="text-[13px] leading-4 text-blackishBlue/50 mt-4">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”</p>
            </article>

        </section>
      </main>
    </>
  )
}

export default App
