"use client";
import Ribbon from "@/components/Ribbon";
import { useEffect, useState } from "react";

type FileMeta = {
  title: string;
  url: string;
  size: string;
  type: string;
  lastUpdate: string;
  rawTitle: string;
};

export default function DownloadPage() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  const fileList = [
    "/assets/downloadFiles/SRIYOG-Consulting-Meeting-Minutes.pdf",
    "/assets/downloadFiles/SRIYOG-Consulting-Order.docx",
    "/assets/downloadFiles/SRIYOG-Consulting-guestbook-feedback-form.pdf",
    "/assets/downloadFiles/SRIYOG.Consulting.-.Customer.Feedback.Form.pdf",
    "/assets/downloadFiles/Internship-Sample-Letter-from-College.pdf",
    "/assets/downloadFiles/SRIYOG.Consulting.Internship.Recommondation.Letter.from.College-.docx",
    "/assets/downloadFiles/SRIYOG-Consulting-Internship-Recommendation-Letter.docx",
    "/assets/downloadFiles/sriyog-consulting-logos.zip",
  ];

  const getFileType = (fileName: string): string => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return "PDF Document";
      case "doc":
      case "docx":
        return "Word Document";
      case "zip":
        return "ZIP Archive";
      default:
        return "Unknown";
    }
  };

  const handleDownload = async (url: string, name: string) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(objectUrl);
  };

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata: FileMeta[] = await Promise.all(
        fileList.map(async (fileUrl) => {
          const res = await fetch(fileUrl);
          const blob = await res.blob();
          const rawTitle = decodeURIComponent(
            fileUrl.split("/").pop() || "Unknown File"
          );
          const cleanedTitle = rawTitle
            .replace(/\.[^/.]+$/, "")
            .replace(/-/g, " ");
          const title = cleanedTitle;
          const size = `${(blob.size / 1024).toFixed(2)} KB`;
          const type = getFileType(rawTitle);
          const lastUpdate = new Date().toLocaleDateString();
          console.log(rawTitle);
          console.log(title);

          return { title, url: fileUrl, size, type, lastUpdate, rawTitle };
        })
      );
      setFiles(metadata);
    };

    fetchMetadata();
  }, []);

  return (
    <>
      <Ribbon name="Download" des="" />
      <section className="max-w-[1180px] mx-auto px-4 md:px-6 py-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-gray-200 hidden md:table-header-group">
              <tr>
                <th className="text-left py-3 px-4 whitespace-nowrap">Title</th>
                <th className="text-left py-3 px-4 whitespace-nowrap">Size</th>
                <th className="text-left py-3 px-4 whitespace-nowrap">Type</th>
                <th className="text-left py-3 px-4 whitespace-nowrap">
                  Last Updated
                </th>
                <th className="text-left py-3 px-4 whitespace-nowrap">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } md:table-row rounded-md shadow-sm p-4 mb-4 block`}
                >
                  <td className="py-3 px-4 font-medium block md:table-cell">
                    {item.title}
                  </td>
                  <td className="py-2 px-4 block md:table-cell">
                    <span className="md:hidden font-semibold mr-4">
                      File Size:
                    </span>
                    {item.size}
                  </td>
                  <td className="py-2 px-4 block md:table-cell">
                    <span className="md:hidden font-semibold mr-4">
                      File Type:
                    </span>
                    {item.type}
                  </td>
                  <td className="py-2 px-4 block md:table-cell md:align">
                    <span className="md:hidden font-semibold mr-4">
                      Published Date:
                    </span>
                    {item.lastUpdate}
                  </td>
                  <td className="py-2 px-4 block md:table-cell md:align-middle">
                    <span className="md:hidden font-semibold mr-4">
                      Download:
                    </span>
                    <button
                      onClick={() => handleDownload(item.url, item.rawTitle)}
                      className="text-[#055D59] border-[#055D59] border px-3 py-1 rounded hover:bg-[#044c4a] hover:text-white transition-all duration-200 text-xs md:text-sm"
                    >
                      Download:
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
