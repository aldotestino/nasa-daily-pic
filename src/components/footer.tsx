import Link from 'next/link';
import { buttonVariants } from './ui/button';

function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 grid place-items-center text-sm text-muted-foreground text-center space-y-2">
        <p>Data provided by NASA's Astronomy Picture of the Day API</p>
        <p>Made with ❤️ by{' '}<Link href="https://github.com/aldotestino" target='_blank' className="hover:underline">Aldo Testino</Link></p>
      </div>
    </footer>
  );
}

export default Footer;