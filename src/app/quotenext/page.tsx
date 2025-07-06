"use client";

import Ribbon from "@/components/Ribbon";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    phonenumber: "",
    email: "",
    whatsapp: "",
    service: "",
    budget: "",
    competitor: "",
    reference: "",
    startDate: "",
    endDate: "",
    scope: "",
    technology: "",
    business: "",
    monthlyBudget: "",
    vendor: "",
    registration: "",
    industry: "",
    panvat: "",
    referralName: "",
    referralPhone: "",
    how: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const services = [
    "Website Redesigning",
    "Facebook Marketing",
    "Website Update",
    "Website Development",
    "Data Analysis",
    "Lead Generation",
    "Facebook Boosting",
    "eCommerce Solutions",
    "Logo Desigining",
    "Software Development",
    "Search Engine Optimization",
    "Data Banking",
    "Website Analysis",
    "Cloudflare Solutions",
    "Digital Branding",
    "Mobile App Development",
    "Others",
  ];

  const businessStatuses = [
    "Yes",
    "Above Breakeven Point",
    "Meeting Breakeven Point",
    "No",
    "Bleeding Phase",
    "Other",
  ];

  const budgets = [
    "Above NPR 15,000",
    "Above NPR 25,000",
    "Above NPR 50,000",
    "Below NPR 100,000",
    "Above NPR 100,000",
  ];

  const registrationTypes = [
    "Nagarpalika",
    "Gharelu",
    "Office of The Company Registrar (Pvt. Ltd)",
    "Social Welfare Council",
    "CDO Office",
    "INGO",
    "Social Organization",
    "Union/ Club/ Community Based Organization",
    "Others",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data: ", form);
    // TODO: Add API call here
  };

  return (
    <>
      <Ribbon name="Quote" des="" />
      <div className="max-w-[1180px] px-6 md:px-0 mx-auto">
        <h1 className="text-2xl font">IT Service Quotation</h1>
        <p>
          We prioritize understanding your unique requirements, delivering
          personalized solutions that align with your goals, and maintaining
          high levels of security to protect your data. Whether you're a
          startup, an established business, or a government entity, our focus on
          excellence and customer satisfaction makes us the IT partner you can
          trust.
        </p>
        <p>
          Let us help you stay ahead in a competitive world with cutting-edge
          technology and exceptional support. Choose us for unparalleled IT
          service in Nepal.
        </p>
        <p>
          Please fill your requirements so that we can provide you the best
          proposal & pricing.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" px-4 md:px-0  max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          { id: "name", label: "Name of Organization" },
          { id: "address", label: "Address/City" },
          { id: "contact", label: "Name of Contact Person" },
          { id: "phonenumber", label: "Phone Number" },
          { id: "email", label: "Email", type: "email" },
          { id: "whatsapp", label: "WhatsApp Number" },
        ].map(({ id, label, type = "text" }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              className="border w-full p-2 rounded mt-1"
            />
          </div>
        ))}

        <div>
          <label htmlFor="service">Select a Service</label>
          <select
            id="service"
            value={form.service}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          >
            <option value="">Select</option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget">Project Budget in NPR</label>
          <select
            id="budget"
            value={form.budget}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          >
            <option value="">Select</option>
            {budgets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {[
          { id: "competitor", label: "Name of Your Competitor" },
          { id: "reference", label: "Reference Website Link (URL)" },
          { id: "startDate", label: "Project Start Date" },
          { id: "endDate", label: "Project Ending Date" },
          { id: "scope", label: "Scope of Work" },
          { id: "technology", label: "Preferred Technology Stack" },
        ].map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type="text"
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              className="border w-full p-2 rounded mt-1"
            />
          </div>
        ))}

        <div>
          <label htmlFor="business">Is your business on profit?</label>
          <select
            id="business"
            value={form.business}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          >
            <option value="">Select</option>
            {businessStatuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="monthlyBudget">Monthly IT Budget</label>
          <input
            id="monthlyBudget"
            type="text"
            value={form.monthlyBudget}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        <div>
          <label htmlFor="vendor">Existing IT Vendor</label>
          <input
            id="vendor"
            type="text"
            value={form.vendor}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        <div>
          <label htmlFor="registration">Organization Registration Type</label>
          <select
            id="registration"
            value={form.registration}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          >
            <option value="">Select</option>
            {registrationTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="industry">Industry Type</label>
          <input
            id="industry"
            type="text"
            value={form.industry}
            onChange={handleChange}
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        {[
          { id: "panvat", label: "PAN/VAT Number" },
          { id: "referralName", label: "Referral Person Name" },
          { id: "referralPhone", label: "Referral Phone Number" },
          { id: "how", label: "How did you know about us?" },
          { id: "message", label: "Requirements / Messages" },
        ].map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type="text"
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              className="border w-full p-2 rounded mt-1"
            />
          </div>
        ))}

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-gray-700  text-white px-6 py-2 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
