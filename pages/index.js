import Image from "next/image";

import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import fetcher from "@/utils/fetcher";
import Link from "next/link";
import { Inter } from "next/font/google";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/users",
    fetcher,
    { revalidateOnFocus: true }
  );
  const router = useRouter();

  console.log("data", data);

  return (
    <div className="">
      <div className="grid grid-cols-12 ">
        <p className=" font-bold text-[26px] my-8">DATA USER</p>
      </div>

      <Link href="/user/add">
        <div className="bg-blue-500 px-4 py-2 rounded-md w-[120px] text-center text-white  hover:bg-blue-600 hover:shadow-md">
          Add New
        </div>
      </Link>
      <table className="min-w-full divide-y divide-gray-200 shadow-md">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-teal-900">
          {Array.isArray(data) &&
            data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => router.push(`/user/kontrak/${item.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
