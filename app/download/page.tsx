"use client";
import Ribbon from "@/components/Ribbon";
import { useEffect, useState } from "react";

type FileMeta = {
  title: string;
  url: string;
  size: string;
  type: string;
  lastUpdate: string;
};

export default function DownloadPage() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  const fileList = [
    "/assets/downloadFiles/SRIYOG-Consulting-Meeting-Minutes.pdf",
    "/assets/downloadFiles/SRIYOG-Consulting-Order.docx",
    "/assets/downloadFiles/SRIYOG-Consulting-guestbook-feedback-form.pdf",
    "/assets/downloadFiles/SRIYOG-Consulting-Customer-Feedback-Form.pdf",
    "/assets/downloadFiles/Internship-Sample-Letter-from-College.pdf",
    "/assets/downloadFiles/SRIYOG-Consulting-Internship-Application-Letter.docx",
    "/assets/downloadFiles/SRIYOG-Consulting-Internship-Recommendation-Letter.docx",
  "/assets/downloadFiles/sriyog-consulting-logos.zip"
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

  const fetchMetadata = async () => {
    const metadata: FileMeta[] = await Promise.all(
      fileList.map(async (fileUrl) => {
        const res = await fetch(fileUrl);
        const blob = await res.blob();
        const rawTitle = decodeURIComponent(fileUrl.split("/").pop() ||"Unknown File")
        const cleanedTitle = rawTitle.replace(/\.[^/.]+$/, "").replace(/-/g, " ")
        const title = cleanedTitle
        const size = `${(blob.size / 1024).toFixed(2)} KB`;
        const type = getFileType(rawTitle);
        const lastUpdate = new Date().toLocaleDateString();
        return { title, url: fileUrl, size, type, lastUpdate };
      })
    );
    setFiles(metadata);
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
    fetchMetadata();
  }, []);

  return (
    <>
    <Ribbon name="Download" des=""/>
    <section className="max-w-[1180px] mx-auto px-4 md:px-6 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 whitespace-nowrap">Title</th>
              <th className="text-left py-3 px-4 whitespace-nowrap">Size</th>
              <th className="text-left py-3 px-4 whitespace-nowrap">Type</th>
              <th className="text-left py-3 px-4 whitespace-nowrap">Last Updated</th>
              <th className="text-left py-3 px-4 whitespace-nowrap">Download</th>
            </tr>
          </thead>
          <tbody>
            {files.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } rounded-md shadow-sm`}
              >
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">{item.size}</td>
                <td className="py-3 px-4">{item.type}</td>
                <td className="py-3 px-4">{item.lastUpdate}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDownload(item.url, item.title)}
                    className="text-[#055D59] border-[#055D59] border px-3 py-1 rounded hover:bg-[#044c4a] hover:text-white transition-all duration-200 text-xs md:text-sm"
                  >
                    Download
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
