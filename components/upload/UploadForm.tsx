import React, { useState } from "react";
import Button from "./Button";
import { supabase } from "../../lib/supabaseclient"; // Ensure the Supabase client is imported

const UploadForm: React.FC = () => {
  // State variables
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if an image file is selected
    if (!file) {
      setUploadError("Please select an image to upload.");
      return;
    }

    // Upload image to Supabase storage
    const filePath = `${Date.now()}_${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("uploads") // Replace with your bucket name
      .upload(filePath, file);

    if (uploadError) {
      setUploadError("Failed to upload image.");
      console.error(uploadError);
      return;
    }

    // Get the public URL of the uploaded image
    const { data: publicData } = supabase.storage
      .from("uploads")
      .getPublicUrl(filePath);

    const publicURL = publicData?.publicUrl || "";

    // Insert the post into the Supabase database
    const { error: insertError } = await supabase
      .from("post") // Replace with your table name
      .insert([{ title, description, image_url: publicURL }]);

    if (insertError) {
      setMessage("Error creating post");
      console.error(insertError);
    } else {
      setMessage("Post created successfully!");
      setTitle("");
      setDescription("");
      setFile(null); // Reset the file input
    }
  };

  return (
    <form
      className="flex flex-col w-full text-sm font-medium max-md:mt-10 max-md:max-w-full"
      onSubmit={handleSubmit} // Add handleSubmit to the form's onSubmit event
    >
      <h2 className="self-start text-4xl font-semibold leading-none text-zinc-800">
        Upload a New Blog
      </h2>
      <p className="self-start mt-3 text-sm leading-5 text-black max-md:max-w-full">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>

      {/* Title Input */}
      <div className="mt-16 max-md:mt-10">
        <label htmlFor="title" className="text-red-600">
          Title <span className="text-red-600">*</span>
        </label>
        <input
          id="title"
          type="text"
          className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Description Input */}
      <div className="mt-6">
        <label htmlFor="description" className="text-red-600">
          Description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="description"
          className="flex overflow-hidden gap-2 items-center px-4 pt-2.5 pb-28 mt-1.5 w-full font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px] min-h-[150px] max-md:pb-24"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="mt-6">
        <label htmlFor="file" className="text-red-600">
          Image Upload <span className="text-red-600">*</span>
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          className="mt-1 block w-full border-gray-300"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-5 justify-between mt-8 text-base text-center max-md:max-w-full">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Upload</Button>
      </div>

      {/* Display messages */}
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      {uploadError && <p className="mt-4 text-sm text-red-600">{uploadError}</p>}
    </form>
  );
};

export default UploadForm;
