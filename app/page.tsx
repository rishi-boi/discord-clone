import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper className="bg-primary text-white">
        <div className="mb-32 flex flex-col justify-centeri items-center z-[4] relative">
          <h1 className="font-ginto text-2xl mb-4 lg:mb-8 md:text-6xl md:text-center">
            IMAGINE A PLACE...
          </h1>
          <p className="text-lg leading-relaxed lg:text-center lg:text-xl lg:leading-loose lg:w-[750px]">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex flex-col mt-5 lg:mt-10 gap-y-3 md:flex-row gap-x-4">
            <Link
              href="/"
              className="
            bg-white text-not-quite-black rounded-full text-xl font-medium px-8 py-4 flex items-center gap-2 justify-center transition-all hover:text-primary hover:shadow-xl"
            >
              <ArrowDownToLine />
              Download for Windows
            </Link>
            <Link
              href="/"
              className="
            bg-not-quite-black text-white rounded-full text-xl font-medium px-8 py-4 text-center hover:bg-not-quite-black-hover transition-all hover:shadow-xl"
            >
              Open Discord in your browser
            </Link>
          </div>
        </div>
        <Image
          src="./assets/hero1.svg"
          alt="hero1"
          width={500}
          height={200}
          className="absolute lg:w-[650px] bottom-0 right-0 lg:left-[-132px] z-[2]"
        />
        <Image
          src="./assets/hero2.svg"
          alt="hero2"
          width={500}
          height={200}
          className="absolute lg:w-[650px] bottom-0 right-0 hidden lg:block lg:right-[-132px] z-[2]"
        />
        <Image
          src="./assets/wave.svg"
          alt="wave"
          width={500}
          height={200}
          className="absolute bottom-0 left-0 w-full hidden lg:block z-[1]"
        />
      </Wrapper>
      <Wrapper className="text-not-quite-black flex flex-col lg:flex-row gap-y-6">
        <Image
          src="./assets/invite.svg"
          width={500}
          height={400}
          alt="invite"
          className="mx-auto md:w-5/6 lg:w-2/4"
        />
        <div className="lg:px-12 lg:py-8 flex flex-col gap-y-6">
          <h1 className="text-2xl lg:text-5xl font-semibold md:text-4xl lg:mb-6">
            Create an invite-only place where you belong
          </h1>
          <p className="text-lg md:text-xl">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </Wrapper>
      <Wrapper className="text-not-quite-black bg-bg flex flex-col lg:flex-row-reverse gap-y-6">
        <Image
          src="./assets/hangingOut.svg"
          width={500}
          height={400}
          alt="hangingOut"
          className="mx-auto md:w-5/6 lg:w-2/4"
        />
        <div className="lg:px-12 lg:py-8 flex flex-col gap-y-6">
          <h1 className="text-2xl lg:text-5xl font-semibold md:text-4xl lg:mb-6">
            Where hanging out is easy
          </h1>
          <p className="text-lg md:text-xl">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
      </Wrapper>
      <Wrapper className="text-not-quite-black flex flex-col lg:flex-row gap-y-6">
        <Image
          src="./assets/fandom.svg"
          width={500}
          height={400}
          alt="hangingOut"
          className="mx-auto md:w-5/6 lg:w-2/4"
        />
        <div className="lg:px-12 lg:py-8 flex flex-col gap-y-6">
          <h1 className="text-2xl lg:text-5xl font-semibold md:text-4xl lg:mb-6">
            From few to a fandom
          </h1>
          <p className="text-lg md:text-xl">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </Wrapper>
      <Wrapper className="text-not-quite-black bg-bg flex flex-col gap-y-6 lg:px-24">
        <h1 className="font-ginto text-center text-3xl lg:text-5xl leading-8">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className="text-lg md:text-xl text-center lg:py-4 lg:px-14">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <Image
          src="./assets/reliable.svg"
          width={500}
          height={400}
          alt="hangingOut"
          className="mb-10 mx-auto w-5/6 lg:w-full"
        />
        <div className="relative">
          <h1 className="text-center font-semibold text-3xl md:text-4xl mb-5">
            Ready to start your journey?
          </h1>
          <Link
            href="/"
            className="
            bg-primary text-white rounded-full text-xl font-medium px-8 py-4 flex items-center gap-2 justify-center md:w-[400px] lg:w-[400px] w-[300px] mx-auto transition-all hover:bg-primary-hover hover:shadow-xl relative z-[3]"
          >
            <ArrowDownToLine />
            Download for Windows
          </Link>
          <Image
            src="./assets/stars.svg"
            width={500}
            height={500}
            alt="stars"
            className="absolute bottom-0 left-0 z-[0]"
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
