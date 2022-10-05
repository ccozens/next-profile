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
  }),

  it('footer renders', () => {
    render(<Footer />)

    const nextLink = screen.getByRole('link', {
      name: 'NEXT.js'
    })

    const typescriptLink = screen.getByRole('link', {
      name: 'Typescript'
    })

    const vercelLink = screen.getByRole('link', {
      name: 'Vercel'
    })

    const cloudinaryLink = screen.getByRole('link', {
      name: 'Cloudinary'
    })
    expect(nextLink).toBeInTheDocument()
    expect(typescriptLink).toBeInTheDocument()
    expect(vercelLink).toBeInTheDocument()
    expect(cloudinaryLink).toBeInTheDocument()
  });
})
