import React, { useState, useRef } from 'react';
import S3Service from '../lib/S3Service';
import './ImageUploader.css';

const ImageUploader = ({ onUploadSuccess, folder = 'admin-uploads' }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Upload file
      uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const result = await S3Service.uploadImage(file, folder);
      
      clearInterval(interval);
      setProgress(100);
      
      // Notify parent component
      if (onUploadSuccess) {
        onUploadSuccess(result);
      }
      
      // Clear preview after success
      setTimeout(() => {
        setPreview(null);
        setProgress(0);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 2000);
      
    } catch (err) {
      setError(err.message);
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      uploadFile(file);
    } else {
      setError('Please drop an image file');
    }
  };

  return (
    <div className="image-uploader">
      <div
        className={`upload-area ${uploading ? 'uploading' : ''}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        
        {preview ? (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="preview" />
            {uploading && (
              <div className="upload-progress">
                <div className="progress-bar" style={{ width: `${progress}%` }} />
                <span>{progress}%</span>
              </div>
            )}
          </div>
        ) : (
          <div className="upload-prompt">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p>Click or drag image to upload</p>
            <small>JPEG, PNG, GIF, WebP up to 5MB</small>
          </div>
        )}
      </div>
      
      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}
      
      {uploading && !preview && (
        <div className="upload-status">
          Uploading... {progress}%
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
