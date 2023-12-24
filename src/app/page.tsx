import Image from 'next/image'
import React, { useState } from 'react';


export default function Home() {
  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center">
      <div className="bg-gray-400 shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Добро пожаловать!
        </h1>
        <p className="text-gray-800 mb-6">
          Страница для демостации
        </p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Click Here!
        </button>
      </div>
    </div>
  )
}

