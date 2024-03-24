import { useMutation } from "@/hooks/useMutation";
import Layout from "@/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Kontak() {
  const { mutate } = useMutation();
  const router = useRouter();
  const { id } = router.query;
  const [notes, setNotes] = useState();
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

  console.log("s", notes);

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(`http://localhost:8000/users/${id}`);
      const listNotes = await res.json();

      setNotes(listNotes);
    }
    fetchingData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: notes?.name,
          email: notes?.email,
          username: notes?.username,
          phone: notes?.phone,
          gender: notes?.gender,
          tempat_lahir: notes?.tempat_lahir,
          tanggal_lahir: notes?.tanggal_lahir,
          bank: notes?.bank,
          no_rekening: notes?.no_rekening,
          status: notes?.status,
          alamat: notes?.alamat,
        }),
      });
      const result = await response.json();
      router.push("/");
      console.log("result ", result);
    } catch (error) {}
  };

  // const isAnyFieldEmpty = () => {
  //   return Object.values(notes).some((value) => value === "");
  // };

  //   Pendapatan
  const [income, setIncome] = useState([{ nama: "", type: "", nominal: "" }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...income];
    list[index][name] = value;
    setIncome(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...income];
    list.splice(index, 1);
    setIncome(list);
  };

  const handleAddClick = () => {
    setIncome([...income, { nama: "", type: "", nominal: "" }]);
  };
  // end pendapatan

  //   Potongan
  const [potongan, setPotongan] = useState([
    { nama: "", type: "", nominal: "" },
  ]);

  const handleInputPotChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...potongan];
    list[index][name] = value;
    setIncome(list);
  };

  const handleRemovePotClick = (index) => {
    const list = [...potongan];
    list.splice(index, 1);
    setPotongan(list);
  };

  const handleAddPotClick = () => {
    setPotongan([...income, { nama: "", type: "", nominal: "" }]);
  };
  // End potongan
  return (
    <div>
      <div className="">
        <p className=" font-bold text-[26px] my-8">
          Data User Evangeline Commings
        </p>
        <p className=" font-bold text-[20px] my-2">Profile</p>
        <div className="border-b border-gray-300 my-4"></div>
      </div>
      <div className=" grid grid-cols-12 ">
        <div className="col-span-6 ">
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Name *</p>
            </div>
            <div className="col-span-9 ">
              <input
                type="text"
                placeholder="Input name ..."
                value={notes?.name || ""}
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, name: event.target.value })
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
                value={notes?.email || ""}
                onChange={(event) =>
                  setNotes({ ...notes, email: event.target.value })
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
                value={notes?.username || ""}
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, username: event.target.value })
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
                value={notes?.phone || ""}
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, phone: event.target.value })
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
                  setNotes({ ...notes, gender: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
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
                value={notes?.tempat_lahir || ""}
                onChange={(event) =>
                  setNotes({ ...notes, tempat_lahir: event.target.value })
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
                value={notes?.tanggal_lahir || ""}
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, tanggal_lahir: event.target.value })
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
                  setNotes({ ...notes, bank: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
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
                value={notes?.no_rekening || ""}
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, no_rekening: event.target.value })
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
                  setNotes({ ...notes, status: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
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
                value={notes?.alamat || ""}
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setNotes({ ...notes, alamat: event.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-4">
          <button
            onClick={() => handleSubmit()}
            className={`bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 hover:shadow-md 
            `}
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

      {/* kontrak */}
      <div className="">
        <div className="flex justify-between">
          <p className=" font-bold text-[20px] my-2">Kontrak</p>
          <button className=" text-red-500 underline hover:text-red-600 cursor-pointer">
            Tambah
          </button>
        </div>
        <div className="border-b border-gray-300 my-4"></div>
      </div>
      <div className=" grid grid-cols-12 ">
        <div className="col-span-6 ">
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Masa Berlaku *</p>
            </div>
            <div className="col-span-9 flex items-center">
              <input
                type="date"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[120px]"
              />
              <p className=" mx-4">s/d</p>
              <input
                type="date"
                placeholder="Input name ..."
                className=" outline-none border border-gray-200 py-2 px-3 rounded-md w-[120px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Golongan Pajak *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, gender: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
                <option value="K">K</option>
                <option value="K1">K/1</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Golongan BPJS *</p>
            </div>
            <div className="col-span-9 ">
              <div>
                <input
                  type="checkbox"
                  id="ketenagakerjaan"
                  onChange={(event) => {
                    if (event.target.checked) {
                      setUsers({ ...users, ketenagakerjaan: true });
                    } else {
                      const { ketenagakerjaan, ...rest } = users;
                      setUsers(rest);
                    }
                  }}
                />
                <label htmlFor="ketenagakerjaan">Ketenagakerjaan</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="kesehatan"
                  onChange={(event) => {
                    if (event.target.checked) {
                      setUsers({ ...users, kesehatan: true });
                    } else {
                      const { kesehatan, ...rest } = users;
                      setUsers(rest);
                    }
                  }}
                />
                <label htmlFor="kesehatan">Kesehatan</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="askes"
                  onChange={(event) => {
                    if (event.target.checked) {
                      setUsers({ ...users, kesehatan: true });
                    } else {
                      const { kesehatan, ...rest } = users;
                      setUsers(rest);
                    }
                  }}
                />
                <label htmlFor="askes">Askes</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Posisi *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, gender: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
                <option value="BA">Business Analyst</option>
                <option value="FE">Frontend Developer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Cuti Pertahun *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, gender: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
                <option value="14">14</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Jenis Kontrak *</p>
            </div>
            <div className="col-span-9 ">
              <select
                className="outline-none border border-gray-200 py-2 px-3 rounded-md w-[300px]"
                onChange={(event) =>
                  setUsers({ ...users, gender: event.target.value })
                }
              >
                <option value="">-Pilih-</option>
                <option value="1">Kontrak 1</option>
                <option value="2">Kontrak 2</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Minim jam perbulan *</p>
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

          <div className="grid grid-cols-12 mb-4">
            <div className="col-span-3  flex items-center">
              <p>Catatan *</p>
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
            // Disable the button if any field is empty
            className={`bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 hover:shadow-md `}
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

      {/* PENDAPATAN */}
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <p>Pendapatan</p>
        </div>

        <div className="col-span-12">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Nama</th>
                <th className="border border-gray-400 px-4 py-2">Type</th>
                <th className="border border-gray-400 px-4 py-2">Nominal</th>
                <th className="border border-gray-400 px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {income.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-2 py-2">
                    <select
                      className="outline-none border border-gray-200 py-2  rounded-md w-[400px]"
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">-Pilih-</option>
                      <option value="tunjangan">Tunjangan</option>
                      <option value="gajipokok">Gaji Pokok</option>
                    </select>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <select
                      className="outline-none border border-gray-200 py-2  rounded-md w-[400px]"
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">-Pilih-</option>
                      <option value="A">Tipe A</option>
                      <option value="B">Tipe B</option>
                    </select>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <input
                      type="text"
                      name="nominal"
                      value={item.nominal}
                      onChange={(event) => handleInputChange(index, event)}
                      className="outline-none w-full"
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {index !== 0 && (
                      <button
                        onClick={() => handleRemoveClick(index)}
                        className="text-red-500 font-bold"
                      >
                        X
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <button
              onClick={handleAddClick}
              className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600"
            >
              Add Income
            </button>
          </div>
        </div>
      </div>

      {/* PENDAPATAN */}

      {/* POTONGAN */}
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-12">
          <p>Potongan</p>
        </div>

        <div className="col-span-12">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Nama</th>
                <th className="border border-gray-400 px-4 py-2">Type</th>
                <th className="border border-gray-400 px-4 py-2">Nominal</th>
                <th className="border border-gray-400 px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {potongan.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-2 py-2">
                    <select
                      className="outline-none border border-gray-200 py-2  rounded-md w-[400px]"
                      onChange={(event) => handleInputPotChange(index, event)}
                    >
                      <option value="">-Pilih-</option>
                      <option value="tunjangan">BPJS TK</option>
                      <option value="gajipokok">BPJS</option>
                    </select>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <select
                      className="outline-none border border-gray-200 py-2  rounded-md w-[400px]"
                      onChange={(event) => handleInputPotChange(index, event)}
                    >
                      <option value="">-Pilih-</option>
                      <option value="A">Tipe A</option>
                      <option value="B">Tipe B</option>
                    </select>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <input
                      type="text"
                      name="nominal"
                      value={item.nominal}
                      onChange={(event) => handleInputPotChange(index, event)}
                      className="outline-none w-full"
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {index !== 0 && (
                      <button
                        onClick={() => handleRemovePotClick(index)}
                        className="text-red-500 font-bold"
                      >
                        X
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <button
              onClick={handleAddPotClick}
              className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600"
            >
              Add Potongan
            </button>
          </div>
        </div>
      </div>

      {/* POTONGAN */}
    </div>
  );
}
