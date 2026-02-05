import React from 'react';
import { IconBrandBlogger } from '@tabler/icons-react'

export default function Logo({ width = '100px' }) {
  return (
    <div className='flex items-center justify-center max-w-xs h-full'>
      <IconBrandBlogger size={40}/>
    </div>
  );
}
