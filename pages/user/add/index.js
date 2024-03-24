import { useMutation } from "@/hooks/useMutation";
import Layout from "@/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function AddUser() {
  const { mutate } = useMutation();

  const router = useRouter();
  const [users, setUsers] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    gender: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    bank: "",
    no_rekening: "",
    status: "",
    alamat: "",
  });

  const handleSubmit = async () => {
    const response = await mutate({
      url: "http://localhost:8000/users",
      payload: users,
    });

    router.push("/");
  };

  const isAnyFieldEmpty = () => {
    return Object.values(users).some((value) => value === "");
  };
  return (
    <div className="relative">
      <div className="">
        <p className=" font-bold text-[26px] my-8">ADD DATA USER</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 ">
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Name *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, name: event.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Email *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, email: event.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Username *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, username: event.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Phone *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, phone: event.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Gender *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, gender: event.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Tempat Lahir *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, tempat_lahir: event.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Tanggal Lahir *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="date"
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, tanggal_lahir: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Bank *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, bank: event.target.value })
                }
              >
                <option value="">Select Bank</option>
                <option value="bsi">BSI</option>
                <option value="bri">BRI</option>
                <option value="mandiri">Mandiri</option>
                <option value="bca">BCA</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>No Rekening *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, no_rekening: event.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Status *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, status: event.target.value })
                }
              >
                <option value="">Select Status</option>
                <option value="menikah">Menikah</option>
                <option value="belummenikah">Belum Menikah</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Alamat *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, alamat: event.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-4">
          <button
            onClick={() => handleSubmit()}
            disabled={isAnyFieldEmpty()} // Disable the button if any field is empty
            className={`bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 hover:shadow-md ${
              isAnyFieldEmpty() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Save
          </button>
          <Link href="/">
            <button className="ml-4 bg-red-500 px-5 py-2 rounded-md text-white hover:bg-red-600 hover:shadow-md">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
