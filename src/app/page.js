/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. A notifications page, that allows to mark all messages as read, or mark invdividual message as read.
 *
 * @link
 */

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function Indicator() {
    return (
      <div className="inline-block w-2 h-2 ml-1 rounded-full bg-brand-red align-middle">
        <span className="sr-only">Unread message</span>
      </div>
    );
  }

  return (
    <div className="container">
      <main
        id="main"
        className="flex flex-col items-center justify-center min-h-screen"
        aria-label="Content"
      >
        <h1 className="sr-only">Frontend Mentor, Notifications page</h1>
        <div className="flex flex-col w-full md:w-4/6 bg-white p-4 md:p-8 md:rounded-2xl">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <h2 className="font-extrabold text-2xl text-grey-blue-500">
                Notifications
              </h2>
              <div className="flex self-center h-fit px-3 py-[6px] rounded-md bg-brand-blue">
                <span className="text-lg leading-none text-white">3</span>
              </div>
            </div>
            <button className="p-2 hover:text-brand-blue focus:text-brand-blue">
              Mark all as read
            </button>
          </div>
          <section className="pt-4 md:pt-8" role="feed" aria-busy={false}>
            <article className="flex flex-row items-start gap-4 w-full p-4 rounded-lg bg-grey-blue-100 mb-4">
              <Image
                src="/avatar-angela-gray.webp"
                alt="Profile image of user Angela Gray"
                width={45}
                height={45}
              />
              <div className="flex flex-col">
                <p>
                  <Link
                    href="/"
                    className="font-extrabold text-grey-blue-500 hover:text-brand-blue focus:text-brand-blue"
                  >
                    Username
                  </Link>{" "}
                  <span>words here</span>{" "}
                  <Link
                    href="/"
                    className="font-extrabold hover:text-brand-blue focus:text-brand-blue"
                  >
                    Link
                  </Link>
                  <Indicator />
                </p>
                <p>1m ago</p>
                <Link
                  href="/"
                  className="block p-4 border border-grey-blue-300 rounded-md mt-4 hover:bg-grey-blue-300 focus:bg-grey-blue-300"
                >
                  {`Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of
                  fun and improving my game.`}
                </Link>
              </div>
              <Image
                src="/image-chess.webp"
                alt="Preview image of chess club"
                width={45}
                height={45}
              />
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
