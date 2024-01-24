"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@material-tailwind/react";
import { knockie_sites_server } from "@/url/urls";

export default function AddYourwebsite() {
  const [captchaDone, setCaptchaDone] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    url: "",
    description: "",
    safeBrowsing: false,
    captcha: false,
  });

  const [errors, setErrors] = useState({
    name: "This field is required",
    url: "This field is required",
    tags: "This field is required",
    description: "This field is required",
    safeBrowsing: false,
    captcha: false,
  });

  // ...

  const validateForm = () => {
    // Your validation logic goes here
    const newErrors = {
      name: inputs.name ? "" : "Site Name is required",
      url: inputs.url ? "" : "url is required",
      description: inputs.description ? "" : "Description is required",
      safeBrowsing:
        inputs.safeBrowsing !== false
          ? ""
          : "Please check the Safe Browsing checkbox",
      captcha:
        inputs.captcha !== false && captchaDone !== false
          ? ""
          : "Please complete the captcha and check the box",
    };

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async () => {
    console.log(inputs);

    // Validate the form before submitting
    if (validateForm()) {
      // Submit the form or perform other actions
      //save the inputs in the server

      const res = await fetch(`${knockie_sites_server}/websites/upsert-new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        mode: "cors",
        body: JSON.stringify(inputs),
      });
      const json = await res.json();
      if (res.ok) {
        alert(`${json.message}`);
        setTimeout(() => {
          router.push("/add-your-website/response");
        }, 2000);
      } else {
        alert(`${json.error}`);
      }
    } else {
      // There are still errors, handle them accordingly
      alert("Something went wrong. Please try again");
      //console.log("Form has errors, please fix them");
    }
  };
  const router = useRouter();
  useEffect(() => {
    import("preline");
  }, []);

  function onChange(value) {
    setCaptchaDone(true);
    console.log("Captcha value:", value);
  }
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <p className="text-2xl font-bold">Add Your Website</p>
      <div className="py-10 space-y-4">
        <div className="flex   items-start justify-start">
          <p className="font-bold  w-32 text-gray-500">Name</p>
          <div className="  space-y-2">
            {" "}
            <input
              type="text"
              className="py-2 px-4 block w-[460px] border border-gray-300 rounded-md text-sm outline:border-blue-500 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder=" "
              value={inputs?.name}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
                setErrors((prevState) => ({ ...prevState, name: "" }));
              }}
            ></input>
            {errors?.name && (
              <p className="text-xs text-red-500">{errors?.name}</p>
            )}
          </div>
        </div>

        <div className="flex   items-start justify-start">
          <p className="font-bold  w-32 text-gray-500">url</p>
          <div className=" ">
            {" "}
            <input
              type="text"
              className="py-2 px-4 block w-[460px]  border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder=" "
              value={inputs?.url}
              onChange={(e) => {
                setInputs((prevState) => ({
                  ...prevState,
                  url: e.target.value,
                }));
                setErrors((prevState) => ({ ...prevState, url: "" }));
              }}
            ></input>
            {errors?.url && (
              <p className="text-xs text-red-500">{errors?.url}</p>
            )}
          </div>
        </div>

        <div className="flex     items-start justify-start">
          <p className="font-bold  w-32 text-gray-500">Description</p>
          <div className=" ">
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
      <div className="  lg:ml-32">
        <div className="flex  ">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 w-4 h-4 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
          <p className="text-xs mt-2 text-red-500">{errors?.safeBrowsing}</p>
        )}
        <div className=" -ml-1 my-2">
          <Button
            className=" m-0 shadow-none bg-transparent drop-shadow-none hover:shadow-none p-1"
            onClick={handleOpen}
          >
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 w-4 h-4 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
              className="text-sm capitalize text-gray-500 ms-3 dark:text-gray-400"
            >
              Captcha
            </label>
          </Button>
          {errors?.captcha && (
            <p className="text-xs ml-3 text-red-500">{errors?.captcha}</p>
          )}
          <ReCAPTCHA
            className="my-3"
            sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY}`}
            onChange={onChange}
          />
        </div>
        <div className="mt-10">
          <a
            href="/"
            className="py-3   mr-6  px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Go back
          </a>
          {captchaDone && (
            <button
              onClick={() => handleSubmit()}
              className="py-3   -ml-3    px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
