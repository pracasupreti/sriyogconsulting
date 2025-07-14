"use client";

import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";

export default function MeetPage() {
  const defaultLink = "https://meet.google.com/jnm-yrjn-fei";
  const interviewLink = "https://meet.google.com/mro-jtob-zfb";
  const specialLink = "https://meet.google.com/tat-vvcq-pzu";

  const fullSchedule: { [day: string]: { time: string; title: string }[] } = { 
      Sunday: [
      { time: "11:00 AM – 11:45 AM", title: "UI/UX" },
      { time: "12:15 PM – 1:00 PM", title: "App Development" },
      { time: "1:15 PM – 2:00 PM", title: "Web Development" },
      { time: "3:00 PM – 3:45 PM", title: "SMM" },
      { time: "4:15 PM – 5:00 PM", title: "Interview" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "Project Discussion" },
    ],
    Monday: [
      { time: "11:00 AM – 11:45 AM", title: "Interview" },
      { time: "12:15 PM – 1:00 PM", title: "Training / Product Showcase" },
      { time: "1:15 PM – 2:00 PM", title: "SMM" },
      { time: "3:00 PM – 3:45 PM", title: "Web Development" },
      { time: "4:15 PM – 5:00 PM", title: "UI/UX" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "Project Discussion" },
    ],
    Tuesday: [
      { time: "11:00 AM – 11:45 AM", title: "Web Development" },
      { time: "12:15 PM – 1:00 PM", title: "Interview" },
      { time: "1:15 PM – 2:00 PM", title: "Digital Journalism Demo" },
      { time: "3:00 PM – 3:45 PM", title: "SMM" },
      { time: "4:15 PM – 5:00 PM", title: "App Development" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "Project Discussion" },
    ],
    Wednesday: [
      { time: "11:00 AM – 11:45 AM", title: "UI/UX" },
      { time: "12:15 PM – 1:00 PM", title: "App Development" },
      { time: "1:15 PM – 2:00 PM", title: "Web Development" },
      { time: "3:00 PM – 3:45 PM", title: "Interview" },
      { time: "4:15 PM – 5:00 PM", title: "Data Science" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "Project Discussion" },
    ],
    Thursday: [
      { time: "11:00 AM – 11:45 AM", title: "App Development" },
      { time: "12:15 PM – 1:00 PM", title: "SMM" },
      { time: "1:15 PM – 2:00 PM", title: "Interview" },
      { time: "3:00 PM – 3:45 PM", title: "Web Development" },
      { time: "4:15 PM – 5:00 PM", title: "App Development" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "Project Discussion" },
    ],
    Friday: [
      { time: "11:00 AM – 11:45 AM", title: "UI/UX" },
      { time: "12:15 PM – 1:00 PM", title: "App Development" },
      { time: "1:15 PM – 2:00 PM", title: "Web Development" },
      { time: "3:00 PM – 3:45 PM", title: "SMM" },
      { time: "4:15 PM – 5:00 PM", title: "Data Science" },
      { time: "5:00 PM – 5:45 PM", title: "Training / Product Showcase" },
      { time: "8:00 PM – 8:45 PM", title: "Digital Journalism" },
      { time: "9:00 PM – 9:45 PM", title: "#TechFriday" },
    ],
  };

  const getLink = (title: string, time: string): string => {
    const isInterview = title.toLowerCase().includes("interview");
    const isSpecial = title.toLowerCase().includes("techfriday") || time.startsWith("8:00 PM");
    if (isInterview) return interviewLink;
    if (isSpecial) return specialLink;
    return defaultLink;
  };

  return (
    <>
      <Ribbon name="Meet" des="" />
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col gap-6">
        {Object.entries(fullSchedule).map(([day, sessions]) => (
          <div
            key={day}
            className="w-full bg-white border border-gray-200 rounded-[15px] shadow p-4 mt-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/assets/images/meet/meet.jpg"
                width={250}
                height={250}
                alt={day}
                className="rounded-[12px] border border-gray-400"
              />
              <h2 className="text-xl font-bold">{day}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sessions.map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <p className="font-semibold">{session.title}</p>
                    <p className="text-sm text-gray-500">{session.time}</p>
                  </div>
                  <Link
                    href={getLink(session.title, session.time)}
                    target="_blank"
                    className="px-3 py-1 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                  >
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
