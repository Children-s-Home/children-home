'use client'
import Link from 'next/link';

export default function ImpactNav() {
  return (
    <div className='list-container'>
      <ul className="impact-links m-3 justify-content-between">
        <li>
          <Link href="/impact/donating" className='btn btn-primary btn-lg fw-bold'>Donation</Link>
        </li>
        <li>
          <Link href="/impact/volunteering" className='btn btn-success btn-lg fw-bold'>Volunteering</Link>
        </li>
        <li>
          <Link href="/impact/fundraising" className='btn btn-secondary btn-lg fw-bold'>Fundraising</Link>
        </li>
      </ul>
    </div>
  );
}
