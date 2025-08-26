# Influix Website

A professional landing page for Influix, a creator-brand matchmaking platform. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Professional Design**: Clean, modern UI with premium styling
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Contact Form**: Integrated contact form with Formspree support
- **Creator Roster**: Preview of vetted creators with full roster link
- **Performance**: Fast loading with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Emoji placeholders (replace with your preferred icon set)
- **Forms**: Formspree integration (optional)

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_ROSTER_URL="https://airtable.com/your-gallery-link"
   NEXT_PUBLIC_FORMSPREE_ID="your_formspree_id"  # optional
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_ROSTER_URL` | Your Airtable roster gallery URL | Yes |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for contact submissions | No |

## Customization

### Branding
- **Colors**: Update `tailwind.config.js` with your brand colors
- **Logo**: Replace placeholder text with your actual logo
- **Images**: Add your logo, favicon, and Open Graph image to `public/`

### Content
- **Copy**: Update text content in component files
- **Creators**: Modify the creator data in `components/RosterPreview.tsx`
- **Contact**: Update email addresses and contact information

### Styling
- **Typography**: Modify font sizes and weights in Tailwind classes
- **Spacing**: Adjust padding/margins using the `section-padding` utility class
- **Components**: Customize individual components as needed

## File Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   └── privacy/           # Privacy policy page
├── components/            # Reusable components
│   ├── Button.tsx         # Button component with variants
│   ├── Section.tsx        # Section wrapper component
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── TrustBar.tsx       # Trust indicators
│   ├── HowItWorks.tsx     # Process explanation
│   ├── RosterPreview.tsx  # Creator preview grid
│   ├── WhyUs.tsx          # Benefits section
│   ├── Testimonial.tsx    # Customer testimonial
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # Footer component
│   └── CreatorCard.tsx    # Individual creator card
├── styles/                # Global styles
│   └── globals.css        # Tailwind imports + custom CSS
├── public/                # Static assets
│   ├── og.png            # Open Graph image (1200x630)
│   ├── favicon.ico       # Favicon
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
└── package.json           # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## SEO & Performance

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: XML sitemap for search engines
- **Robots**: Proper robots.txt configuration
- **Performance**: Optimized with Next.js App Router
- **Accessibility**: Semantic HTML and ARIA labels

## Contact Form

The contact form supports two submission methods:

1. **Formspree** (Recommended): Set `NEXT_PUBLIC_FORMSPREE_ID` for form submissions
2. **Mailto Fallback**: If no Formspree ID is set, shows mailto: link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to Influix.

## Support

For questions or support, contact [hello@influix.com](mailto:hello@influix.com)

---

**Note**: This is a production-ready template. Replace placeholder content, images, and branding with your actual assets before launching. # influencehub-site
