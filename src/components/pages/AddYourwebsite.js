"use client";
import React, { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { useRouter } from "next/navigation";
const colourOptions = [
  { value: "eCommerce", label: "eCommerce" },
  { value: "Business", label: "Business" },
  { value: "Blog", label: "Blog" },
  { value: "Portfolio", label: "Portfolio" },
  { value: "Personal", label: "Personal" },
];
const animatedComponents = makeAnimated();
export default function AddYourwebsite() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({
    siteName: "This field is required",
    URL: "This field is required",
    tags: "This field is required",
    description: "This field is required",
    safeBrowsing: "Please check this box",
    captcha: "Please check this box",
  });
  const router = useRouter();
  useEffect(() => {
    import("preline");
  }, []);
  const handleSubmit = () => {
    const validateForm = () => {
      // Check if there are no errors
      return Object.values(errors).every((error) => error === "");
    };

    // Validate the form before submitting
    if (validateForm()) {
      // Submit the form or perform other actions
      alert("Form submitted successfully");
      router.push("/add-your-website/response");
      console.log(inputs);
    } else {
      // There are still errors, handle them accordingly
      console.log("Form has errors, please fix them");
    }
  };
  return (
    <div>
      <p className="text-2xl font-bold">Add Your Website</p>
      <div className="py-10 space-y-4">
        <div className="flex gap-10   justify-start">
          <p className="font-bold text-gray-500">Name</p>
          <div className="ml-16 space-y-2">
            {" "}
            <input
              type="text"
              className="py-2 px-4 block w-[460px] border border-gray-300 rounded-md text-sm outline:border-blue-500 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder=" "
              value={inputs?.siteName}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  siteName: e.target.value,
                }));
                setErrors((prevState) => ({ ...prevState, siteName: "" }));
              }}
            ></input>
            {errors?.siteName && (
              <p className="text-xs text-red-500">{errors?.siteName}</p>
            )}
          </div>
        </div>

        <div className="flex gap-10 items-center justify-start">
          <p className="font-bold text-gray-500">URL</p>
          <div className="ml-20">
            {" "}
            <input
              type="text"
              className="py-2 px-4 block w-[460px]  border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder=" "
              value={inputs?.URL}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  URL: e.target.value,
                }));
                setErrors((prevState) => ({ ...prevState, URL: "" }));
              }}
            ></input>
            {errors?.URL && (
              <p className="text-xs text-red-500">{errors?.URL}</p>
            )}
          </div>
        </div>
        <div className="flex gap-28 items-center justify-start">
          <p className="font-bold text-gray-500">Tags</p>
          <div>
            {" "}
            <Select
              className="w-[460px]"
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colourOptions[2], colourOptions[1]]}
              isMulti
              value={inputs?.tags}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  tags: e,
                }));
                setErrors((prevState) => ({ ...prevState, tags: "" }));
              }}
              options={colourOptions}
            />{" "}
            {errors?.tags && (
              <p className="text-xs text-red-500">{errors?.tags}</p>
            )}
          </div>
        </div>
        <div className="flex gap-3  items-center justify-start">
          <p className="font-bold text-gray-500">Description</p>
          <div className="ml-12">
            {" "}
            <textarea
              type="text"
              className="py-2 px-4 block w-[460px]  border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder=" Describe your website"
              value={inputs?.description}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }));
                setErrors((prevState) => ({ ...prevState, description: "" }));
              }}
            ></textarea>
            {errors?.description && (
              <p className="text-xs text-red-500">{errors?.description}</p>
            )}
          </div>
        </div>
      </div>
      <div className="px-40">
        <div className="flex -ml-2">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checked-checkbox"
            value={inputs?.safeBrowsing}
            onChange={(e) => {
              setInputs((prevState) => ({
                ...prevState,
                safeBrowsing: e.target.checked,
              }));
              setErrors((prevState) => ({ ...prevState, safeBrowsing: "" }));
            }}
          />
          <label
            for="hs-checked-checkbox"
            className="text-sm text-gray-500 ms-3 dark:text-gray-400"
          >
            Your website will be checked by google safe browsing
          </label>
        </div>
        {errors?.safeBrowsing && (
          <p className="text-xs text-red-500">{errors?.safeBrowsing}</p>
        )}
        <div className="flex -ml-2">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checked-checkbox"
            value={inputs?.captcha}
            onChange={(e) => {
              setInputs((prevState) => ({
                ...prevState,
                captcha: e.target.checked,
              }));
              setErrors((prevState) => ({ ...prevState, captcha: "" }));
            }}
          />
          <label
            for="hs-checked-checkbox"
            className="text-sm text-gray-500 ms-3 dark:text-gray-400"
          >
            Captcha
          </label>
        </div>
        {errors?.captcha && (
          <p className="text-xs text-red-500">{errors?.captcha}</p>
        )}
        <button
          onClick={() => handleSubmit()}
          className="py-3 mt-10 -ml-3  mx-auto px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
