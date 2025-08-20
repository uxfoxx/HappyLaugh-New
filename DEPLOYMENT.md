# 🚀 Deployment Guide - cPanel Hosting

This guide will walk you through deploying your Ceylon Happy Laugh React website to cPanel hosting.

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Access to your cPanel hosting account
- ✅ Your website files ready for upload
- ✅ FTP client (optional, but recommended for large uploads)

## 🔨 Step 1: Build the Production Version

1. **Open your terminal/command prompt** in the project folder

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Build the production version**:
   ```bash
   npm run build
   ```

4. **Verify the build**:
   - A `dist` folder will be created
   - This contains all the optimized files for production

## 📁 Step 2: Prepare Files for Upload

The `dist` folder contains everything you need to upload:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── css/
├── js/
├── img/
├── video/
└── .htaccess
```

## 🌐 Step 3: Upload to cPanel

### Method A: Using cPanel File Manager (Recommended for beginners)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel login page
   - Enter your username and password

2. **Open File Manager**
   - Find and click "File Manager" in the Files section
   - Navigate to `public_html` (or your domain's document root)

3. **Clear existing files** (if updating an existing site)
   - Select all files in `public_html`
   - Click "Delete" (⚠️ **Backup first if needed**)

4. **Upload the dist folder contents**
   - Click "Upload" button
   - Select all files from your `dist` folder
   - **Important**: Upload the *contents* of the `dist` folder, not the folder itself
   - Wait for upload to complete

5. **Extract if needed**
   - If you uploaded a ZIP file, right-click and select "Extract"

### Method B: Using FTP Client (Recommended for large sites)

1. **Get FTP credentials from cPanel**
   - In cPanel, find "FTP Accounts"
   - Note your FTP server, username, and password

2. **Connect with FTP client** (FileZilla, WinSCP, etc.)
   - Server: Your FTP server address
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (usually)

3. **Upload files**
   - Navigate to `public_html` on the server
   - Upload all contents from your `dist` folder
   - Ensure file permissions are set correctly (644 for files, 755 for folders)

## ⚙️ Step 4: Configure URL Rewriting

The `.htaccess` file should already be included in your `dist` folder. If not, create it:

1. **In cPanel File Manager**, navigate to `public_html`

2. **Create new file** named `.htaccess` (note the leading dot)

3. **Add this content**:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```

4. **Save the file**

## 🔍 Step 5: Test Your Website

1. **Visit your domain** in a web browser
2. **Test all pages**:
   - Home page: `yourdomain.com`
   - About: `yourdomain.com/about`
   - Rooms: `yourdomain.com/rooms`
   - Contacts: `yourdomain.com/contacts`
   - Individual room pages

3. **Check functionality**:
   - ✅ Navigation works
   - ✅ Images load properly
   - ✅ Animations work
   - ✅ Mobile menu functions
   - ✅ Contact forms work
   - ✅ Booking links work

## 🚨 Troubleshooting

### Common Issues and Solutions

#### **404 Errors on Page Refresh**
- **Problem**: Direct URLs like `/about` show 404 error
- **Solution**: Ensure `.htaccess` file is uploaded and contains the rewrite rules

#### **Images Not Loading**
- **Problem**: Images show broken links
- **Solution**: 
  - Check that the `img` folder is uploaded to `public_html`
  - Verify image paths start with `/img/` not `img/`

#### **CSS/JS Not Loading**
- **Problem**: Website looks unstyled
- **Solution**:
  - Ensure `css` and `js` folders are uploaded
  - Check that `index.html` references are correct

#### **Mobile Menu Not Working**
- **Problem**: Hamburger menu doesn't open
- **Solution**: Verify all JavaScript files are uploaded and loading

### **File Permissions**
If you encounter permission errors:
- **Files**: Set to 644
- **Folders**: Set to 755
- **`.htaccess`**: Set to 644

## 📊 Performance Optimization

### After Deployment:

1. **Enable Gzip Compression** (in cPanel or .htaccess)
2. **Set up Browser Caching** 
3. **Optimize Images** if needed
4. **Enable HTTPS** through cPanel SSL

### Optional .htaccess Additions:

Add these to your `.htaccess` for better performance:

```apache
# Enable Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 🔄 Future Updates

To update your website:

1. **Make changes** in your local development environment
2. **Test thoroughly** using `npm run dev`
3. **Build new version** using `npm run build`
4. **Upload new dist folder contents** to cPanel
5. **Clear any caching** if enabled

## 📞 Support

If you encounter any issues during deployment:
- Check cPanel error logs
- Contact your hosting provider's support
- Verify all files uploaded correctly
- Test in different browsers

---

**🎯 Your website should now be live with clean URLs and all functionality preserved!**