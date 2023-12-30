"use client";

import {
  MaterialSymbolsFilterList,
  MaterialSymbolsLightKeyboardDoubleArrowLeft,
  MaterialSymbolsLightKeyboardDoubleArrowRight,
  StarRating,
} from "@/components/icons";

import { use, useEffect, useState } from "react";

const internshipData = [
  {
    index: 1,
    internship: "Data Science Intern",
    company: "Internshala",
    tags: ["Data Science", "Machine Learning", "Python"],
    rating: { value: 4.5, numberOfRatings: 100 },
  },
  {
    index: 2,
    internship: "Software Engineering Intern",
    company: "LinkedIn",
    tags: ["Software Engineering", "Web Development", "JavaScript"],
    rating: { value: 3.8, numberOfRatings: 85 },
  },
  {
    index: 3,
    internship: "Marketing Intern",
    company: "Google",
    tags: ["Marketing", "SEO", "Social Media"],
    rating: { value: 4.2, numberOfRatings: 120 },
  },
  {
    index: 4,
    internship: "Finance Intern",
    company: "Facebook",
    tags: ["Finance", "Accounting", "Financial Analysis"],
    rating: { value: 4.0, numberOfRatings: 95 },
  },
  {
    index: 5,
    internship: "Human Resources Intern",
    company: "Amazon",
    tags: ["Human Resources", "Recruitment", "Employee Relations"],
    rating: { value: 3.9, numberOfRatings: 90 },
  },
  {
    index: 6,
    internship: "Design Intern",
    company: "Apple",
    tags: ["Design", "UX/UI", "Graphic Design"],
    rating: { value: 4.6, numberOfRatings: 150 },
  },
  {
    index: 7,
    internship: "Business Development Intern",
    company: "Microsoft",
    tags: ["Business Development", "Sales", "Market Research"],
    rating: { value: 4.1, numberOfRatings: 110 },
  },
  {
    index: 8,
    internship: "Product Management Intern",
    company: "Uber",
    tags: ["Product Management", "Agile Methodologies", "Product Strategy"],
    rating: { value: 4.7, numberOfRatings: 200 },
  },
  {
    index: 9,
    internship: "Healthcare Intern",
    company: "Netflix",
    tags: ["Healthcare", "Medical Research", "Health Policy"],
    rating: { value: 3.9, numberOfRatings: 85 },
  },
  {
    index: 10,
    internship: "Content Writing Intern",
    company: "Twitter",
    tags: ["Content Writing", "Copywriting", "Blogging"],
    rating: { value: 4.0, numberOfRatings: 100 },
  },
  {
    index: 11,
    internship: "Legal Intern",
    company: "Salesforce",
    tags: ["Legal", "Contract Law", "Compliance"],
    rating: { value: 4.2, numberOfRatings: 120 },
  },
  {
    index: 12,
    internship: "Operations Intern",
    company: "Airbnb",
    tags: ["Operations", "Logistics", "Supply Chain"],
    rating: { value: 4.5, numberOfRatings: 180 },
  },
  {
    index: 13,
    internship: "Human Rights Intern",
    company: "UNICEF",
    tags: ["Human Rights", "Policy Advocacy", "Social Justice"],
    rating: { value: 4.3, numberOfRatings: 150 },
  },
  {
    index: 14,
    internship: "Artificial Intelligence Intern",
    company: "IBM",
    tags: ["Artificial Intelligence", "Big Data", "Neural Networks"],
    rating: { value: 4.6, numberOfRatings: 190 },
  },
  {
    index: 15,
    internship: "Environmental Sustainability Intern",
    company: "Greenpeace",
    tags: [
      "Environmental Sustainability",
      "Climate Change",
      "Renewable Energy",
    ],
    rating: { value: 4.1, numberOfRatings: 130 },
  },
  {
    index: 16,
    internship: "Journalism Intern",
    company: "CNN",
    tags: ["Journalism", "Broadcasting", "News Reporting"],
    rating: { value: 4.4, numberOfRatings: 170 },
  },
  {
    index: 17,
    internship: "Graphic Design Intern",
    company: "Adobe",
    tags: ["Graphic Design", "Illustration", "Digital Art"],
    rating: { value: 4.8, numberOfRatings: 220 },
  },
  {
    index: 18,
    internship: "Supply Chain Management Intern",
    company: "Walmart",
    tags: ["Supply Chain Management", "Logistics", "Inventory Control"],
    rating: { value: 4.0, numberOfRatings: 105 },
  },
  {
    index: 19,
    internship: "Cybersecurity Intern",
    company: "Cisco",
    tags: ["Cybersecurity", "Network Security", "Information Assurance"],
    rating: { value: 4.3, numberOfRatings: 140 },
  },
  {
    index: 20,
    internship: "Public Health Intern",
    company: "WHO",
    tags: ["Public Health", "Epidemiology", "Global Health"],
    rating: { value: 4.5, numberOfRatings: 160 },
  },
  {
    index: 21,
    internship: "Data Analyst Intern",
    company: "Oracle",
    tags: ["Data Analysis", "SQL", "Data Visualization"],
    rating: { value: 4.2, numberOfRatings: 125 },
  },
  {
    index: 22,
    internship: "Event Management Intern",
    company: "Disney",
    tags: ["Event Management", "Entertainment", "Event Coordination"],
    rating: { value: 4.6, numberOfRatings: 180 },
  },
  {
    index: 23,
    internship: "Fashion Design Intern",
    company: "Gucci",
    tags: ["Fashion Design", "Apparel Design", "Fashion Illustration"],
    rating: { value: 4.7, numberOfRatings: 200 },
  },
  {
    index: 24,
    internship: "Quality Assurance Intern",
    company: "Tesla",
    tags: ["Quality Assurance", "Testing", "Software Quality"],
    rating: { value: 4.0, numberOfRatings: 95 },
  },
  {
    index: 25,
    internship: "Hospitality Intern",
    company: "Marriott International",
    tags: ["Hospitality", "Hotel Management", "Customer Service"],
    rating: { value: 4.3, numberOfRatings: 150 },
  },
  {
    index: 26,
    internship: "Mobile Marketing Intern",
    company: "MobileMonkey",
    tags: ["Mobile Marketing", "Digital Advertising", "Social Media Marketing"],
    rating: { value: 4.1, numberOfRatings: 110 },
  },
  {
    index: 27,
    internship: "Human-Centered Design Intern",
    company: "IDEO",
    tags: ["Human-Centered Design", "User Experience", "Design Thinking"],
    rating: { value: 4.5, numberOfRatings: 170 },
  },
  {
    index: 28,
    internship: "Content Strategy Intern",
    company: "HubSpot",
    tags: ["Content Strategy", "Content Marketing", "SEO"],
    rating: { value: 4.4, numberOfRatings: 160 },
  },
  {
    index: 29,
    internship: "Legal Compliance Intern",
    company: "Apple",
    tags: ["Legal Compliance", "Regulatory Affairs", "Corporate Governance"],
    rating: { value: 4.0, numberOfRatings: 120 },
  },
  {
    index: 30,
    internship: "Research Intern",
    company: "Harvard University",
    tags: ["Research", "Academic Research", "Scientific Study"],
    rating: { value: 4.7, numberOfRatings: 190 },
  },
  {
    index: 31,
    internship: "Digital Marketing Intern",
    company: "Google",
    tags: ["Digital Marketing", "Online Advertising", "SEM"],
    rating: { value: 4.6, numberOfRatings: 210 },
  },
  {
    index: 32,
    internship: "Art Intern",
    company: "Tate Modern",
    tags: ["Art", "Visual Arts", "Contemporary Art"],
    rating: { value: 4.3, numberOfRatings: 160 },
  },
  {
    index: 33,
    internship: "Customer Success Intern",
    company: "Zendesk",
    tags: ["Customer Success", "Client Management", "Customer Support"],
    rating: { value: 4.5, numberOfRatings: 180 },
  },
  {
    index: 34,
    internship: "Blockchain Intern",
    company: "Coinbase",
    tags: ["Blockchain", "Cryptocurrency", "Decentralized Finance"],
    rating: { value: 4.4, numberOfRatings: 170 },
  },
  {
    index: 35,
    internship: "Supply Chain Intern",
    company: "Amazon",
    tags: ["Supply Chain", "Logistics", "Inventory Management"],
    rating: { value: 4.2, numberOfRatings: 140 },
  },
  {
    index: 36,
    internship: "Digital Design Intern",
    company: "Adobe",
    tags: ["Digital Design", "UX/UI", "Interaction Design"],
    rating: { value: 4.7, numberOfRatings: 200 },
  },
  {
    index: 37,
    internship: "Business Analyst Intern",
    company: "Deloitte",
    tags: ["Business Analysis", "Data Analytics", "Consulting"],
    rating: { value: 4.1, numberOfRatings: 130 },
  },
  {
    index: 38,
    internship: "E-commerce Intern",
    company: "Shopify",
    tags: ["E-commerce", "Online Retail", "Shopify Development"],
    rating: { value: 4.6, numberOfRatings: 190 },
  },
  {
    index: 39,
    internship: "Public Policy Intern",
    company: "United Nations",
    tags: ["Public Policy", "Policy Research", "International Relations"],
    rating: { value: 4.5, numberOfRatings: 175 },
  },
  {
    index: 40,
    internship: "Social Media Intern",
    company: "Facebook",
    tags: ["Social Media", "Content Creation", "Community Management"],
    rating: { value: 2, numberOfRatings: 220 },
  },
  // Continue with more entries...
];

function convertNumberToArray(number: number) {
  const integerPart = Math.floor(number);
  const decimalPart = Math.round((number - integerPart) * 2);

  const array = Array(integerPart).fill(1); // Create an array with the integer part filled with 1s

  if (decimalPart !== 0) {
    array.push(decimalPart / 2); // Push the rounded decimal value into the array
  }

  const remainingZeros = 5 - array.length;
  if (remainingZeros > 0) {
    array.push(...Array(remainingZeros).fill(0)); // Fill remaining zeros to reach a length of 5
  }

  return array;
}

export default function Page() {
  const [data, setData] = useState(internshipData);
  useEffect(() => {
    // setData(data.filter((item) => item.rating.value < 3));
    // setData(data.sor((item) => item.rating.value < 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pages = Array.from(Array(Math.ceil(data.length / 8) + 1).keys());
  pages.shift();

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="flex flex-col items-center min-h-screen p-8">
      <DataTable
        data={data.slice(
          currentPage + 8 * (currentPage - 1) - 1,
          1 * currentPage + 8 * currentPage
        )}
      />

      <PageSelector
        chosenPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        onNext={() =>
          setCurrentPage(Math.min(currentPage + 1, Math.max(...pages)))
        }
        onPrevious={() =>
          setCurrentPage(Math.max(currentPage - 1, Math.min(...pages)))
        }
        pages={pages}
      />
    </section>
  );
}
// 1-9,10-18
// ((1*currentPage)+(8*(currentPage-1)),(1*currentPage)+(8*currentPage))
// (1 ,1+8) (1+8,1+1+8+8),(1+1+1+8+8,1+1+1+8+8+8)
function PageSelector(props: any) {
  const handlePageChange = (page: number) => {
    props.onPageChange(page); // Call the function passed via props to update the state
  };

  return (
    <div
      className={`m-8 flex items-center justify-between h-10 gap-2  bg-zinc-800/10 w-min `}
    >
      <button
        onClick={props.onPrevious}
        className="h-full px-3 text-xl bg-zinc-950 hover:bg-blue-800"
      >
        <MaterialSymbolsLightKeyboardDoubleArrowLeft />
      </button>
      <div className="flex h-full gap-1">
        {props.pages.map((page: number) => {
          return (
            <button
              key={page}
              className={`h-full px-3  hover:bg-zinc-800 ${
                props.chosenPage == page ? "bg-blue-700" : "bg-zinc-950"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={props.onNext}
        className="h-full px-3 text-xl bg-zinc-950 hover:bg-blue-800"
      >
        <MaterialSymbolsLightKeyboardDoubleArrowRight />
      </button>
    </div>
  );
}
function DataTable(props: any) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-dashed border-white/10 ">
          <th className="p-2 text-left w-72">
            <span className="flex items-center justify-between">
              Internship <MaterialSymbolsFilterList />
            </span>
          </th>
          <th className="p-2 text-left w-14">
            {" "}
            <span className="flex items-center justify-between">
              Company <MaterialSymbolsFilterList />
            </span>
          </th>
          <th className="w-20 p-2 text-left">
            {" "}
            <span className="flex items-center justify-between">
              Tags <MaterialSymbolsFilterList />
            </span>
          </th>
          <th className="w-20 p-2 text-left">
            {" "}
            <span className="flex items-center justify-between">
              Rating <MaterialSymbolsFilterList />
            </span>
          </th>
        </tr>
      </thead>
      <tbody className="font-mono text-sm">
        {props.data.map((item: any) => {
          return (
            <tr
              key={item.index}
              className="cursor-pointer outline-1 outline hover:bg-slate-800/20 outline-white/0 hover:z-10 hover:outline-white/10 group"
            >
              <td className="p-2">{item.internship}</td>
              <td className="p-2 ">
                <span className="flex items-center gap-2">{item.company}</span>
              </td>
              <td className="flex flex-wrap gap-1 p-1">
                {item.tags.map((tag: string) => {
                  return (
                    <span
                      key={item.index + "Tag-" + tag}
                      className="p-1 text-xs w-min rounded bg-zinc-700/5 group-hover:bg-rose-600/10 group-hover:hover:bg-blue-600/20 text-white/80"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </td>
              <td className="p-2 text-xs">
                <span className="flex items-center gap-1">
                  <span className="flex text-base group-hover:text-yellow-500">
                    {convertNumberToArray(item.rating.value).map(
                      (value: number, index) => (
                        <StarRating
                          key={
                            item.index +
                            "-Star-" +
                            index +
                            "" +
                            item.rating.value
                          }
                          value={value}
                        />
                      )
                    )}
                  </span>
                  {item.rating.numberOfRatings}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
