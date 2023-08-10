"use client";

/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. A notifications page, that allows to mark all messages as read.
 *
 * @link https://react.dev/learn/updating-arrays-in-state
 */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { feedData } from "@/data/feedData";

export default function Home() {
  const data = feedData;
  const [feed, setFeed] = useState(data);

  // Keep track of number of unread feed items
  let unreadCount = 0;
  feed.forEach((item) => {
    // If any array item value "read" is set as false
    if (item.read === false) {
      unreadCount++; // Update count number
    }
  });

  function handleClick() {
    const updateFeed = feed.map((item) => {
      if ((item.read = true)) {
        return item; // If array item value "read" is set as true, no change
      } else {
        return {
          ...item,
          read: false, // Otherwise array item value "read" is set as false
        };
      }
    });
    setFeed(updateFeed); // Pass in new feed into state
  }

  // Indicator Component
  function Indicator() {
    return (
      <span className="inline-block w-2 h-2 ml-1 rounded-full bg-brand-red align-middle">
        <span className="sr-only">Unread message indicator</span>
      </span>
    );
  }

  // Feed Component
  function Feed() {
    return (
      <section
        className="pt-4 md:pt-8"
        role="feed"
        aria-busy={false}
        aria-label="Message feed"
      >
        {feed.map((item, index) => (
          <article
            className={`flex flex-row items-start gap-4 w-full p-4 mb-4 ${
              !item.read
                ? "rounded-lg bg-grey-blue-100"
                : "rounded-none bg-transparent"
            }`}
            key={index}
            aria-label={`Message from ` + item.userName}
          >
            <Image
              src={item.userImage.src}
              alt={item.userImage.alt}
              width={45}
              height={45}
            />
            <div className="flex flex-col grow">
              <p>
                <Link
                  href="/"
                  className="font-extrabold text-grey-blue-500 hover:text-brand-blue focus:text-brand-blue"
                >
                  {item.userName}
                </Link>{" "}
                <span>{item.content}</span>{" "}
                {item.feedLink && (
                  <Link
                    href={item.feedLink.href}
                    className="font-extrabold hover:text-brand-blue focus:text-brand-blue"
                  >
                    {item.feedLink.text}
                  </Link>
                )}
                {!item.read && <Indicator />}
              </p>
              <p>{item.timeElapsed}</p>
              {item.message && (
                <Link
                  href="/"
                  className="block p-4 border border-grey-blue-300 rounded-md mt-4 hover:bg-grey-blue-300 focus:bg-grey-blue-300"
                >
                  {item.message}
                </Link>
              )}
            </div>
            {item.feedImage && (
              <Image
                src={item.feedImage.src}
                alt={item.feedImage.alt}
                width={45}
                height={45}
              />
            )}
          </article>
        ))}
      </section>
    );
  }

  return (
    <div className="container">
      <main
        id="main"
        className="flex flex-col items-center justify-center min-h-screen md:py-16"
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
                <div className="text-lg leading-none text-white">
                  <span>{unreadCount}</span>
                  <span className="sr-only">Unread notifications</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="p-2 hover:text-brand-blue focus:text-brand-blue"
            >
              Mark all as read
            </button>
          </div>
          <Feed />
        </div>
      </main>
    </div>
  );
}
