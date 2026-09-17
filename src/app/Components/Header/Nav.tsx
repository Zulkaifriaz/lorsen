import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="#hero" onClick={() => setMobileToggle(false)}>Home</Link>
      </li>
      <li>
        <Link href="#about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>
      <li>
        <Link href="#services" onClick={() => setMobileToggle(false)}>
        Services
        </Link>
      </li>
      <li>
        <Link href="#projects" onClick={() => setMobileToggle(false)}>
        Projects
        </Link>
      </li>
      <li>
        <Link href="#team" onClick={() => setMobileToggle(false)}>
         Our Team
        </Link>
      </li>
      <li>
        <Link href="#contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
