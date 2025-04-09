# React PDF Bookshelf Demo

This project is a React-based educational platform that displays PDF resources, videos, and articles in an interactive bookshelf format. The application supports both English and Spanish languages.

## Project Structure

```
src/
├── component/
│   ├── BookshelfPdf.js         # Spanish version of the bookshelf
│   ├── BookshelfPdf_ING.js     # English version of the bookshelf
│   ├── Articulos_Edu.js        # Spanish articles page
│   ├── Articulos_EduING.js     # English articles page
│   ├── React-Header.js         # Spanish header
│   ├── React-Header_ING.js     # English header
│   └── EducacionPage.css       # Main stylesheet
```

## Adding PDFs to the Bookshelf

### 1. Prepare Your PDF and Cover Image
- Create a cover image for your PDF (recommended size: 200x300px)
- Place both files in the appropriate directory:
```
src/component/Recursos_Educativo/
├── NewPdf.pdf
└── NewPdfCover.png
```

### 2. Import the Files
In either `BookshelfPdf.js` or `BookshelfPdf_ING.js`, add the import statements at the top of the file:

```javascript
// Import PDF
import NewPdf from './Recursos_Educativo/NewPdf.pdf';
// Import cover image
import NewPdfCover from './Recursos_Educativo/NewPdfCover.png';
```

### 3. Add to Books Array
Locate either the `TsunamiBooks` or `TerremotoBooks` array and add a new book object:

```javascript
const TsunamiBooks = [
  // ... existing books ...
  {
    id: 13, // Use the next available number
    title: 'Your Book Title',
    cover: NewPdfCover,
    content: NewPdf,
    description: 'Detailed description of the book content',
    audio: null // Optional: Add audio file if needed
  }
];
```

### 4. Verify the Addition
- The new book should appear in the bookshelf
- Clicking it should open the PDF viewer
- The cover image should display properly

## Adding Videos

### 1. Prepare Video Content
- Create a thumbnail image (recommended size: 400x225px)
- Have your YouTube video URL ready
- Place the thumbnail in:
```
src/component/
└── newVideoThumb.avif
```

### 2. Import the Thumbnail
In either `BookshelfPdf.js` or `BookshelfPdf_ING.js`, add the import:

```javascript
import newVideoThumb from './newVideoThumb.avif';
```

### 3. Add to Video Data
Locate the `videoData` array and add a new video object:

```javascript
const videoData = [
  // ... existing videos ...
  {
    id: 4, // Use the next available number
    title: 'Your Video Title',
    url: 'https://youtube.com/watch?v=your-video-id',
    img: newVideoThumb,
    description: 'Detailed description of the video content'
  }
];
```

### 4. Verify the Addition
- The new video thumbnail should appear in the videos section
- Clicking it should open the YouTube video in a new tab

## Adding Articles

### 1. Prepare Article Content
- Create or obtain an article image (recommended size: 400x300px)
- Have your article URL ready
- Place the image in the appropriate directory or use an external URL

### 2. Add to Articles Data
In either `Articulos_Edu.js` or `Articulos_EduING.js`, locate the `articlesData` object and add a new article:

```javascript
const articlesData = {
  es: [ // or 'en' for English
    // ... existing articles ...
    {
      id: 11, // Use the next available number
      title: 'Your Article Title',
      description: 'Detailed description of the article content',
      image: 'path/to/image.jpg',
      link: 'https://your-article-url'
    }
  ]
};
```

### 3. Verify the Addition
- The new article should appear in the articles section
- Clicking it should open the article in a new tab
- The image should display properly

## Adding New Pages

### 1. Create New Component
Create a new file in `src/component/`:

```javascript
import React, { useState, useEffect } from 'react';
import './EducacionPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewPage = () => {
  const [fadeInClass, setFadeInClass] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);

  useEffect(() => {
    // Trigger the fade-in effect
    setFadeInClass('fade-in');

    // Handle screen size changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 431);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`main-container ${fadeInClass}`}>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center top-section">
          <div className="col-auto">
            <h1 style={{ 
              fontSize: isSmallScreen ? "2.2rem" : "3.2rem", 
              fontWeight: "600", 
              textAlign: "center" 
            }}>
              Your Page Title
            </h1>
          </div>
        </div>
      </div>
      {/* Add your page content here */}
    </div>
  );
};

export default NewPage;
```

### 2. Add Routing
Update your routing configuration in `App.js` or your main routing file:

```javascript
import NewPage from './component/NewPage';

// In your router configuration
<Routes>
  {/* ... existing routes ... */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

### 3. Add Navigation
Update the header component to include navigation to your new page:

```javascript
// In React-Header.js or React-Header_ING.js
<li className="nav-item">
  <a className="nav-link" href="#/new-page">New Page</a>
</li>
```

## Styling Guidelines

### 1. Responsive Design
Use the `isSmallScreen` state variable for responsive adjustments:

```javascript
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);

// In your JSX
<div style={{ 
  fontSize: isSmallScreen ? "1rem" : "1.2rem",
  padding: isSmallScreen ? "1rem" : "2rem"
}}>
  Your content
</div>
```

### 2. CSS Classes
Use existing classes from `EducacionPage.css`:

```css
/* Example of common classes */
.main-container {
  min-height: 100vh;
  padding-top: 80px;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Language Support

### 1. Creating Language Versions
- Create a new component with `_ING.js` suffix for English
- Copy the structure from the Spanish version
- Translate all text content
- Keep the same functionality and styling

### 2. Maintaining Consistency
- Use the same component structure
- Keep IDs and data structures identical
- Ensure all features work in both languages

## Best Practices

### 1. File Organization
```
src/
├── component/
│   ├── Recursos_Educativo/     # PDFs and resources
│   ├── assets/                 # Images and media
│   └── styles/                 # CSS files
```

### 2. Code Structure
```javascript
// Use functional components with hooks
const Component = () => {
  // State management
  const [state, setState] = useState(initialState);
  
  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Event handlers
  const handleEvent = () => {
    // Event logic
  };
  
  return (
    // JSX
  );
};
```

### 3. Content Management
```javascript
// Use consistent data structures
const contentData = {
  id: number,
  title: string,
  description: string,
  media: {
    type: 'pdf' | 'video' | 'article',
    url: string,
    thumbnail: string
  }
};
```

## Troubleshooting

### 1. PDF Not Loading
Check:
- File path is correct
- PDF is properly imported
- Content property is correctly set
- PDF viewer modal is properly configured

### 2. Images Not Displaying
Verify:
- File paths are correct
- Images are properly imported
- Image formats are supported
- File names match exactly

### 3. Responsive Issues
Test:
- Different screen sizes
- Mobile devices
- Different browsers
- CSS media queries

### 4. Creating a Build and Deploying in XAMPP

#### 1. Creating a Production Build

1. **Install Dependencies**
   Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. **Create Production Build**
   Run the build command:
   ```bash
   npm run build
   ```
   This will create a `build` folder containing optimized production files.

3. **Verify Build**
   - Check the `build` folder for:
     - `index.html`
     - `static` folder with JS and CSS files
     - Any assets and resources

#### 2. Deploying in XAMPP (Done for testing locally before deploying to server)

1. **Prepare XAMPP**
   - Install XAMPP if not already installed
   - Start Apache server from XAMPP Control Panel

2. **Locate XAMPP Directory**
   - Navigate to your XAMPP installation directory
   - Default location: `C:\xampp\htdocs`

3. **Create Project Folder**
   - Create a new folder in `htdocs` for your project:
   ```bash
   C:\xampp\htdocs\react-pdf-bookshelf
   ```

4. **Copy Build Files**
   - Copy all contents from your React project's `build` folder to the XAMPP project folder
   - Structure should look like:
   ```
   C:\xampp\htdocs\react-pdf-bookshelf\
   ├── index.html
   ├── static/
   │   ├── css/
   │   ├── js/
   │   └── media/
   └── assets/
   ```

5. **Configure Apache**
   - Open `C:\xampp\apache\conf\httpd.conf`
   - Add or modify the following:
   ```apache
   <Directory "C:/xampp/htdocs/react-pdf-bookshelf">
       Options Indexes FollowSymLinks
       AllowOverride All
       Require all granted
   </Directory>
   ```

6. **Create .htaccess File**
   Create a `.htaccess` file in your project folder with:
   ```apache
   RewriteEngine On
   RewriteBase /react-pdf-bookshelf/
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME} !-l
   RewriteRule . /react-pdf-bookshelf/index.html [L]
   ```

7. **Test Deployment**
   - Restart Apache server
   - Access your application at:
     ```
     http://localhost/react-pdf-bookshelf
     ```

#### 3. Troubleshooting Deployment

1. **404 Errors**
   - Check if `.htaccess` file is properly configured
   - Verify file permissions in XAMPP
   - Ensure all build files are copied correctly

2. **Asset Loading Issues**
   - Check if asset paths are correct in `index.html`
   - Verify that all files are in the correct directories
   - Clear browser cache

3. **Apache Configuration**
   - Ensure mod_rewrite is enabled in Apache
   - Check Apache error logs for specific issues
   - Verify directory permissions

#### 4. Maintenance

1. **Updating the Application**
   - Create new build
   - Copy new files to XAMPP directory
   - Clear browser cache
   - Test all functionality

2. **Backup**
   - Regularly backup your XAMPP project folder
   - Keep a copy of the original build files

3. **Security**
   - Keep XAMPP updated
   - Configure proper file permissions
   - Use secure connections when possible

## Support

For additional support:
1. Check the console for errors
2. Verify all imports are correct
3. Ensure all dependencies are installed
4. Contact the development team for assistance 