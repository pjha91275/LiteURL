"use client"
import React from 'react'
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState()

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (<>
    <div className='mx-auto max-w-lg bg-[#0697C4] shadow-2xl my-16 p-8 rounded-lg flex flex-col gap-4 text-white'>
      <h1 className="font-bold text-3xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Enter your URL" onChange={e => { seturl(e.target.value) }} className="text-xl px-4 py-3 focus:outline-purple-600 rounded-md bg-[#0E3C74] text-white" />
        <input type="text" placeholder="Enter your Short URL" onChange={e => { setshorturl(e.target.value) }} className="text-xl px-4 py-3 focus:outline-purple-600 rounded-md bg-[#0E3C74] text-white" />
        <button onClick={generate} className='text-xl bg-white text-black hover:bg-[#14559B] hover:text-white rounded-lg shadow-lg p-3 py-3 my-3 font-bold'>Generate</button>
      </div>

      {generated && <> <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link></code></>}

    </div>
  </>

  )
}

export default Shorten
