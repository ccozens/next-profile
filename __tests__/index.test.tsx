import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import NavMenu from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

describe('Home', () => {
  it('renders a name as heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Chris Cozens'
    })

    expect(heading).toBeInTheDocument()
  }),

  /* 
  // T-56 when properly look at mocking
  it('navbar renders', () => {
    
    render(<NavMenu />)

    const homeLink = screen.getByRole('link', {
      name: 'Home'
    })

    const aboutLink = screen.getByRole('link', {
      name: 'About'
    })

    const projectsLink = screen.getByRole('link', {
      name: 'Projects'
    })

    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
  }), */
  
  it('footer renders', () => {
    render(<Footer />)

    const nextLink = screen.getByRole('link', {
      name: 'NEXT.js Arrow pointing up and right in square'
    })

    const typescriptLink = screen.getByRole('link', {
      name: 'Typescript Arrow pointing up and right in square'
    })

    const vercelLink = screen.getByRole('link', {
      name: 'Vercel Arrow pointing up and right in square'
    })

    const cloudinaryLink = screen.getByRole('link', {
      name: 'Cloudinary Arrow pointing up and right in square'
    })
    expect(nextLink).toBeInTheDocument()
    expect(typescriptLink).toBeInTheDocument()
    expect(vercelLink).toBeInTheDocument()
    expect(cloudinaryLink).toBeInTheDocument()
  });
})
