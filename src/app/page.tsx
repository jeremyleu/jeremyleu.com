import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Jeremy Leu</title>
      </Head>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start  max-w-192">
        <Image
          src="/JeremyInKaohsiung.jpeg"
          alt="📍 Jeremy in Kaohsiung"
          width={180}
          height={180}
          priority
        />
        <div>
          <p>Hey, I'm Jeremy Leu.</p>
          <br />
          <p>
            I'm a product engineer based in San Francisco currently working at{" "}
            <a
              href="https://ziphq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zip
            </a>
            , and I love building polished products that people use. I've also
            worked at{" "}
            <a
              href="https://leetcode.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              LeetCode
            </a>{" "}
            and{" "}
            <a
              href="https://robinhood.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Robinhood
            </a>
            .
          </p>
          <br />
          <p>
            I helped create and maintain{" "}
            <a
              href="https://dofuslab.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              DofusLab
            </a>
            , an equipment simulator for the game{" "}
            <a
              href="https://dofus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dofus
            </a>
            . Since its launch in 2020, hundreds of players consistently use it
            daily to optimize their gear.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto no-underline!"
            href="/Jeremy_Leu_Resume_Oct_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
          <a
            href="https://github.com/jeremyleu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#383838] dark:hover:text-[#ccc] transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="h-12 w-12" />
          </a>
          <a
            href="https://github.com/lightyearsaway"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#383838] dark:hover:text-[#ccc] transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="h-12 w-12" />
          </a>
          <a
            href="https://linkedin.com/in/jeremyleu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#383838] dark:hover:text-[#ccc] transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-12 w-12" />
          </a>
        </div>
      </main>
    </div>
  );
}
