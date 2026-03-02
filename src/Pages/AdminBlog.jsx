import React, { useState } from "react";
import { API_BASE_URL } from "../config";

const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      console.log('Submitting blog', { title, content, imageUrl, file });
      const form = new FormData();
      form.append("title", title);
      form.append("content", content);
      if (file) form.append("image", file);
      // allow providing an external image url as fallback
      if (imageUrl) form.append("image_url_form", imageUrl);

      const res = await fetch(`${API_BASE_URL}/blogs`, {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        let txt = '';
        try { txt = await res.text(); } catch (e) { txt = String(e); }
        const errMsg = `Status ${res.status}: ${txt}`;
        throw new Error(errMsg || "Failed to create post");
      }
      const created = await res.json();
      setSuccess(`Blog created (id: ${created.id})`);
      setTitle("");
      setContent("");
      setImageUrl("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:600}}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        </div>
          <div className="mb-3">
            <label className="form-label">Image URL (optional)</label>
            <input className="form-control" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Or upload image</label>
            <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} accept="image/*" />
          </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea className="form-control" rows={6} value={content} onChange={(e)=>setContent(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading?"Saving...":"Create"}</button>
        {success && <div className="mt-3 text-success">{success}</div>}
        {error && <div className="mt-3 text-danger">{error}</div>}
      </form>
    </div>
  );
};

export default AdminBlog;
