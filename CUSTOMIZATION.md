# Portfolio Customization Guide

This guide explains how to customize the portfolio website with your own information. All content is managed through TypeScript data files located in the `src/data/` directory.

## Table of Contents

- [Basic Information](#basic-information)
- [Education](#education)
- [Work Experience](#work-experience)
- [Skills](#skills)
- [Certifications](#certifications)
- [Interests](#interests)
- [Projects](#projects)
- [Profile Image](#profile-image)
- [Favicon](#favicon)

## Basic Information

**File:** `src/data/basics.ts`

This file contains your personal information, social links, and the "About Me" summary.

### Basics Object

```typescript
export const basics: Basics = {
	name: string, // Your full name
	headline: string, // Your professional title or headline
	email: string, // Your email address
	location: string // Your location (city, country)
};
```

**Example:**

```typescript
export const basics: Basics = {
	name: 'Holly Shepherd',
	headline: 'Computer Engineer',
	email: 'email@example.com',
	location: 'London, UK'
};
```

### Social Links Object

```typescript
export const socialLinks = {
	linkedIn: string, // URL to your LinkedIn profile
	github: string // URL to your GitHub profile
};
```

**Example:**

```typescript
export const socialLinks = {
	linkedIn: 'https://linkedin.com/in/yourprofile',
	github: 'https://github.com/yourusername'
};
```

### Summary Content

The summary content supports HTML formatting. You can use HTML tags like `<p>`, `<strong>`, `<em>`, etc.

```typescript
export const summaryContent = `
  <p>Your professional summary goes here. You can use <strong>bold text</strong> for emphasis.</p>
  <p>Add multiple paragraphs to describe your background, expertise, and career goals.</p>
`;
```

## Education

**File:** `src/data/education.ts`

This file contains an array of your educational background.

### Education Object Structure

```typescript
{
  id: string,            // Unique identifier (e.g., '1', '2', '3')
  school: string,        // Name of the educational institution
  degree: string,        // Degree name (e.g., 'Bachelor of Science - BSc')
  area: string,          // Field of study (e.g., 'Computer Science')
  period: string,        // Time period (e.g., '2020 - 2024')
  description: string,   // HTML description (can be empty: '<p></p>')
  hidden: boolean        // Set to true to hide this entry
}
```

**Example:**

```typescript
export const education: Education[] = [
	{
		id: '1',
		school: 'Massachusetts Institute of Technology (MIT)',
		degree: 'Master of Science - MSc',
		area: 'Computer Science',
		period: '2024 - Present',
		description: '<p>Focus on artificial intelligence and machine learning.</p>',
		hidden: false
	},
	{
		id: '2',
		school: 'University of California',
		degree: 'Bachelor of Science - BSc',
		area: 'Computer Engineering',
		period: '2020 - 2024',
		description: '<p>Graduated with honors. GPA: 3.9/4.0</p>',
		hidden: false
	}
];
```

**Note:** Items are displayed in the order they appear in the array. The `hidden` property allows you to temporarily hide an entry without deleting it.

## Work Experience

**File:** `src/data/experience.ts`

This file contains an array of your work experience.

### Experience Object Structure

```typescript
{
  id: string,            // Unique identifier
  company: string,       // Company name
  position: string,      // Job title/position
  location: string,      // Work location (optional, can be empty)
  period: string,        // Employment period
  description: string,   // HTML description of responsibilities and achievements
  hidden: boolean        // Set to true to hide this entry
}
```

**Example:**

```typescript
export const experience: Experience[] = [
	{
		id: '1',
		company: 'Google Inc.',
		position: 'Full-Stack Developer',
		location: 'Mountain View, CA',
		period: '2023 - Present',
		description: `
      <p>Leading development of cloud-based applications using modern web technologies.</p>
      <p><strong>Key achievements:</strong></p>
      <ul>
        <li>Improved application performance by 40%</li>
        <li>Led a team of 5 developers</li>
        <li>Implemented CI/CD pipelines</li>
      </ul>
    `,
		hidden: false
	}
];
```

**Tips:**

- Use HTML lists (`<ul>` and `<li>`) for bullet points
- Use `<strong>` tags to highlight important information
- Keep descriptions concise but informative

## Skills

**File:** `src/data/skills.ts`

This file contains an array of your technical skills organized by category.

### Skill Object Structure

```typescript
{
  id: number | string,   // Unique identifier
  name: string,          // Skill category name
  keywords: string[]     // Array of specific technologies/skills
}
```

**Example:**

```typescript
export const skills: Skill[] = [
	{
		id: 1,
		name: 'Web Development',
		keywords: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'MongoDB']
	},
	{
		id: 2,
		name: 'Cloud Infrastructure',
		keywords: ['AWS', 'Azure', 'Docker', 'Kubernetes']
	},
	{
		id: 3,
		name: 'Programming Languages',
		keywords: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java']
	}
];
```

**Tips:**

- Group related skills together under descriptive category names
- List the most important skills first within each category
- Keep keyword names concise

## Certifications

**File:** `src/data/certifications.ts`

This file contains an array of your certifications and training courses.

### Certification Object Structure

```typescript
{
  id: string,            // Unique identifier
  title: string,         // Certification name
  issuer: string,        // Organization that issued the certification
  date: string,          // Date received (e.g., 'June 2025')
  description: string,   // Brief description of what the certification covers
  hidden: boolean        // Set to true to hide this entry
}
```

**Example:**

```typescript
export const certifications: Certification[] = [
	{
		id: '1',
		title: 'AWS Certified Solutions Architect',
		issuer: 'Amazon Web Services',
		date: 'June 2025',
		description: 'Demonstrated expertise in designing distributed systems on AWS.',
		hidden: false
	},
	{
		id: '2',
		title: 'Professional Scrum Master I',
		issuer: 'Scrum.org',
		date: 'March 2024',
		description: 'Certified in Scrum framework and agile principles.',
		hidden: false
	}
];
```

## Interests

**File:** `src/data/interests.ts`

This file contains an array of your professional interests and hobbies.

### Interest Object Structure

```typescript
{
  id: string,            // Unique identifier
  name: string,          // Interest category name
  keywords: string[]     // Array of specific topics or activities
}
```

**Example:**

```typescript
export const interests: Interest[] = [
	{
		id: '1',
		name: 'Web Development',
		keywords: ['Backend', 'Database Design', 'Software Architecture']
	},
	{
		id: '2',
		name: 'Machine Learning',
		keywords: ['Neural Networks', 'Computer Vision', 'NLP']
	},
	{
		id: '3',
		name: 'Open Source',
		keywords: ['Contributing', 'Community Building', 'Documentation']
	}
];
```

**Note:** The Interest interface is defined directly in this file, not in `src/types/index.ts`.

## Projects

**File:** `src/data/projects.ts`

This file contains an array of your portfolio projects. Projects are displayed on a dedicated page with filtering capabilities.

### Project Object Structure

```typescript
{
  id: string,               // Unique identifier (URL-friendly, e.g., 'my-project')
  title: string,            // Project name
  shortDescription: string, // Brief description shown on project cards
  description: string,      // Full HTML description with details
  bannerImage: string,      // Path to banner image (shown on project cards)
  images: string[],         // Array of image paths for the gallery
  labels: string[],         // Technology tags (used for filtering)
  github: string | null,    // GitHub repository URL or null
  demo: string | null,      // Live demo URL or null
  tags: string[]            // Status tags (e.g., 'Active', 'Maintained', 'Hobby')
}
```

**Example:**

```typescript
export const projects: Project[] = [
	{
		id: 'my-awesome-app',
		title: 'My Awesome App',
		shortDescription: 'A web application for task management with real-time collaboration.',
		description: `
      <p>Built with <strong>React</strong> and <strong>Node.js</strong>, this application helps teams collaborate efficiently.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time task updates</li>
        <li>Team chat integration</li>
        <li>File sharing and commenting</li>
        <li>Customizable workflows</li>
      </ul>
    `,
		bannerImage: '/projects/my-app-banner.webp',
		images: ['/projects/my-app-1.webp', '/projects/my-app-2.webp', '/projects/my-app-3.webp'],
		labels: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'TypeScript'],
		github: 'https://github.com/username/my-awesome-app',
		demo: 'https://my-awesome-app.com',
		tags: ['Active', 'Open-Source']
	}
];
```

### Project Tags

The `tags` array is used to display colored badges on project cards. Available tag types with their colors:

- **Active** - Green: Currently maintained and actively developed
- **Maintained** - Yellow: Receives updates and bug fixes
- **Legacy** - Dark Grey: No longer actively developed
- **Hobby** - Blue: Personal side project
- **Open-Source** - Cyan: Open source project
- **Default** - Grey: For any other custom tags

**Example tag usage:**

```typescript
tags: ['Active', 'Open-Source'];
tags: ['Maintained'];
tags: ['Hobby'];
```

**Usage:** Can be used to display featured projects on the home page or a highlights section.

### Project Images

- Place project images in the `public/projects/` directory
- Use relative paths starting with `/projects/` in your code
- Recommended formats: WEBP for best compression, or PNG/JPG/webp
- Banner images are displayed on project cards (aspect ratio: 16:10)
- Gallery images are shown on the project detail page

**Image path examples:**

```typescript
bannerImage: '/projects/my-project-banner.webp';
images: ['/projects/my-project-screenshot-1.webp', '/projects/my-project-screenshot-2.webp'];
```

## Profile Image

The profile image is displayed in the hero section of the home page.

**Location:** `public/profile.webp`

**Recommendations:**

- Use a square image (1:1 aspect ratio)
- Recommended size: 300x300 pixels or larger
- Use WEBP format for better compression
- The image will be displayed as a circle

## Favicon

The favicon is the small icon that appears in browser tabs.

**Location:** `public/favicon.ico`

**Recommendations:**

- Use ICO format for best compatibility
- Size: 32x32 pixels or 64x64 pixels
- You can use online tools to convert images to ICO format

## Type Definitions

All TypeScript type definitions are located in `src/types/index.ts`. These ensure type safety across the application.

**Available Types:**

- `Basics` - Basic personal information
- `Project` - Project structure
- `Skill` - Skill category
- `Experience` - Work experience
- `Education` - Educational background
- `Certification` - Certification details
- `Interest` - Professional interests and hobbies
- `Language` - Language proficiency (currently unused)
- `CustomField` - Custom fields (currently unused)

**Note:** You generally don't need to modify the type definitions unless you want to add new fields to existing objects.

## Colors and Theming

All site colors are centralized in `src/assets/css/colors.css` using CSS custom properties (variables). This makes it easy to customize the entire color scheme by editing a single file.

### Available Color Variables

**Primary Colors:**
- `--color-primary`: Main brand color (#2c3e50) - used for headers, buttons, links
- `--color-primary-dark`: Darker variant (#1a252f) - used for hover states

**Background Colors:**
- `--color-bg-primary`: Main background (white)
- `--color-bg-secondary`: Secondary background (#f8f9fa)
- `--color-bg-tertiary`: Tertiary background (#f7fafc)

**Text Colors:**
- `--color-text-primary`: Main text (#2d3748)
- `--color-text-secondary`: Secondary text (#4a5568)
- `--color-text-muted`: Muted text (#718096)
- `--color-text-light`: Light text (rgba(255,255,255,0.9))

**Border Colors:**
- `--color-border-light`: Light borders (#e2e8f0)
- `--color-border-medium`: Medium borders (#cbd5e0)

**Tag Colors:**
- `--color-tag-active`: Active project tag (#10b981)
- `--color-tag-maintained`: Maintained project tag (#3b82f6)
- `--color-tag-legacy`: Legacy project tag (#f59e0b)
- `--color-tag-hobby`: Hobby project tag (#8b5cf6)
- `--color-tag-opensource`: Open source tag (#ec4899)
- `--color-tag-default`: Default tag (#6b7280)

**Shadows:**
- `--shadow-sm` through `--shadow-2xl`: Predefined shadow values
- `--shadow-button` and `--shadow-button-lg`: Button-specific shadows

**Accent Colors:**
- `--color-accent-danger`: Danger/error color (#dc2626)

### Customizing Colors

To customize the color scheme, edit `src/assets/css/colors.css`:

```css
:root {
	/* Change the primary color */
	--color-primary: #your-color-here;
	
	/* Change backgrounds */
	--color-bg-primary: #your-bg-color;
	
	/* Change text colors */
	--color-text-primary: #your-text-color;
}
```

All components will automatically use the new colors since they reference these variables throughout the CSS files.

## Tips and Best Practices

1. **Consistent Formatting:** Keep your descriptions consistently formatted across all sections.

2. **HTML in Descriptions:** Use HTML for rich formatting:
   - `<p>` for paragraphs
   - `<strong>` for bold text
   - `<ul>` and `<li>` for bullet points
   - `<h3>` for section headers within descriptions

3. **Image Optimization:** Optimize images before adding them to reduce load times:
   - Use WEBP format when possible
4. **URL Slugs:** For project IDs, use URL-friendly slugs:
   - Use lowercase
   - Replace spaces with hyphens
   - Example: "My Cool Project" → "my-cool-project"

5. **Hidden Property:** Use the `hidden` property instead of deleting entries if you want to temporarily hide information.

6. **Order Matters:** Items in arrays are displayed in the order they appear, so arrange them from most recent/important to oldest/least important.

7. **Technology Labels:** Be consistent with technology names across projects for better filtering:
   - Good: "React", "React", "React"
   - Bad: "React", "ReactJS", "React.js"

**Happy customizing!**
