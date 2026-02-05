import React from "react";
import { Link } from "react-router-dom";
import fileService from "../appwrite/services/file-upload";

export default function BlogCard({ $id, title, featuredImage }) {
  const preview = fileService.getFilePreview(featuredImage);
  console.log("ID from Appwrite:", featuredImage);
  console.log("Raw preview result:", preview);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={preview}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}
